import { ITransaction } from "@/types/transaction";
import { Schema, model } from "mongoose";

const COLLECTION_NAME = "Transactions";
const DOCUMENT_NAME = "Transactions";

const transactionSchema: Schema = new Schema<ITransaction>(
    {
        userId: {
            type: String,
            required: true,
        },
        cash: {
            type: Number,
            default: 0,
        },
        cassoTransactionId: {
            type: String,
            required: true,
        },
        bankTransactionId: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        collection: COLLECTION_NAME,
        versionKey: false,
    },
);

export const TransactionModel = model<ITransaction>(DOCUMENT_NAME, transactionSchema);
