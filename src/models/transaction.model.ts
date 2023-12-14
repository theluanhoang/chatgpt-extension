import { ITransaction } from "@/types/transaction";
import { Schema, model } from "mongoose";

const COLLECTION_NAME = "Transactions";
const DOCUMENT_NAME = "Transactions";

const transactionSchema: Schema = new Schema<ITransaction>(
    {
        userId: {
            type: String,
            require: true,
        },
        cash: {
            type: Number,
            default: 0,
        },
        cassoTransactionId: {
            type: String,
            require: true,
            unique: true,
        },
        bankTransactionId: {
            type: String,
            require: true,
            unique: true,
        },
    },
    {
        timestamps: true,
        collection: COLLECTION_NAME,
        versionKey: false,
    },
);

export const TransactionModel = model<ITransaction>(DOCUMENT_NAME, transactionSchema);
