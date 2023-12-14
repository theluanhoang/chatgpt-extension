import { BAD_REQUEST } from "@/core";
import { TransactionModel } from "@/models";
import { IRequestSaveTransaction } from "@/types/transaction";
import { ClientSession } from "mongoose";

class TransactionsService {
    saveTransaction = async (transactionData: IRequestSaveTransaction) => {
        const currentTransaction = await TransactionModel.find({
            cassoTransactionId: transactionData.cassoTransactionId,
            bankTransactionId: transactionData.bankTransactionId,
        });

        if (currentTransaction) throw new BAD_REQUEST("Transaction is exists");

        const newTransaction = new TransactionModel(transactionData);
        console.log("helllo: ", newTransaction);

        const savedTransaction = await newTransaction.save();

        return { savedTransaction };
    };
}

export default new TransactionsService();
