import { TransactionModel, UsageModel } from "@/models";
import { IRequestTransaction, IUsage } from "@/types";
import TransactionService from "./transaction.service";
import { transactionValidation } from "@/helpers/validations/transaction.validation";
import { BAD_REQUEST } from "@/core";
import mongoose from "mongoose";

class WebhooksService {
    handleBankTransfer = async (transactions: IRequestTransaction[]) => {
        const session = await mongoose.startSession();
        session.startTransaction();

        try {
            const updatedUsageArray: (IUsage | null)[] = await Promise.all(
                transactions.map(async (transaction) => {
                    const regex = /DGUPAYMENT-(\d+)/;
                    const match = transaction.description.match(regex);
                    const userId = match ? match[1] : null;
                    const currentTransaction = await TransactionModel.findOne({
                        cassoTransactionId: transaction.id,
                    }).session(session);

                    if (!userId || currentTransaction) {
                        return null;
                    }

                    console.log("userId: ", userId);
                    console.log("transaction: ", transaction);

                    const updatedUsage = await UsageModel.findOneAndUpdate(
                        { userId },
                        { $inc: { cash: transaction.amount } },
                        { upsert: true, new: true, session },
                    );

                    const { error, value } = transactionValidation({
                        cassoTransactionId: transaction.id,
                        bankTransactionId: transaction.tid,
                        cash: transaction.amount,
                        userId,
                    });

                    if (error) throw new BAD_REQUEST(error.details[0].message, 99);

                    console.log("value: ", value);

                    await TransactionService.saveTransaction(value, session);

                    return updatedUsage;
                }),
            );

            await session.commitTransaction();
            session.endSession();

            const updatedUsage = updatedUsageArray.filter((usage) => usage !== null);
            console.log({ updatedUsage });

            return { updatedUsage };
        } catch (error) {
            await session.abortTransaction();
            throw new BAD_REQUEST();
        } finally {
            session.endSession();
        }
    };
}

export default new WebhooksService();
