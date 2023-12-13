import { IUsage } from "@/types";
import { Schema, model } from "mongoose";

const COLLECTION_NAME = "Usages";
const DOCUMENT_NAME = "Usage";

const usageSchema: Schema = new Schema<IUsage>(
    {
        userId: {
            type: String,
            require: true,
            unique: true,
        },
        cash: {
            type: Number,
            default: 0,
        },
        apiKeys: [
            {
                timestamp: {
                    type: String,
                    required: true,
                },
                apiKey: {
                    type: String,
                    required: true,
                },
            },
        ],
    },
    {
        timestamps: true,
        collection: COLLECTION_NAME,
        versionKey: false,
    },
);

export const UsageModel = model<IUsage>(DOCUMENT_NAME, usageSchema);
