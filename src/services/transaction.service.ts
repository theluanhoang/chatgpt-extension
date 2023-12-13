import { BAD_REQUEST } from "@/core";
import { TransactionModel } from "@/models";
import { IRequestSaveTransaction } from "@/types/transaction";
import { ClientSession } from "mongoose";

class TransactionsService {
    saveTransaction = async (transactionData: IRequestSaveTransaction, session: ClientSession | null = null) => {
        const currentTransaction = await TransactionModel.findOne({
            cassoTransactionId: transactionData.cassoTransactionId,
            bankTransactionId: transactionData.bankTransactionId,
        }).session(session);

        if (currentTransaction) throw new BAD_REQUEST("Transaction is exists");

        const newTransaction = new TransactionModel(transactionData);

        const savedTransaction = await newTransaction.save({ session });

        return { savedTransaction };
    };
}

export default new TransactionsService();
