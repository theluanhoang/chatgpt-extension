import { IRequestAsk, IUsage } from "@/types";
import { configOpenai } from "@/configs/config.openai";
import { UsageModel } from "@/models";
import { PRICE_PER_REQUEST } from "@/utils";
import { BAD_REQUEST, FORBIDDEN } from "@/core";
import mongoose from "mongoose";

class AskService {
    createAsk = async ({ imageUrl, apiKey, userId }: IRequestAsk) => {
        const session = await mongoose.startSession();
        session.startTransaction();

        try {
            const userUsage = await UsageModel.findOne({ userId }).session(session);

            if (!userUsage) throw new BAD_REQUEST("User Not Found");
            if (!userUsage.apiKeys) throw new BAD_REQUEST("API Key Not Found");

            const apiKeyMatch = userUsage.apiKeys.some((apiKeyRecord) => apiKeyRecord.apiKey === apiKey);
            if (!apiKeyMatch) throw new BAD_REQUEST("API Key Not Match");

            if (userUsage.cash < PRICE_PER_REQUEST) throw new BAD_REQUEST("Credit Is Not Enough");

            await UsageModel.updateOne({ userId }, { $inc: { cash: -PRICE_PER_REQUEST } }).session(session);

            const prompt =
                "Answer the multiple-choice questions in the image. Return only the content of the correct answers";
            const response = await configOpenai.chat.completions.create({
                model: "gpt-4-vision-preview",
                messages: [
                    {
                        role: "user",
                        content: [
                            { type: "text", text: prompt },
                            { type: "image_url", image_url: { url: imageUrl, detail: "high" } },
                        ],
                    },
                ],
            });

            await session.commitTransaction();
            return { result: response.choices[0].message.content };
        } catch (error) {
            await session.abortTransaction();
            throw new FORBIDDEN();
        } finally {
            session.endSession();
        }
    };
}

export default new AskService();
