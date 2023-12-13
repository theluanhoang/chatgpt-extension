import { FORBIDDEN } from "@/core";
import { createApiKey } from "@/helpers";
import { UsageModel } from "@/models";
import { IRequestCreateApiKey, IRequestDeleteApiKey, IRequestGetApiKey, IUsage } from "@/types";

class UsageService {
    createApiKey = async ({ userId }: IRequestCreateApiKey) => {
        const { apiKey, timestamp } = createApiKey(userId);

        const createApiKeyResponse: IUsage = await UsageModel.findOneAndUpdate(
            { userId },
            {
                $push: {
                    apiKeys: {
                        timestamp,
                        apiKey,
                    },
                },
            },
            { upsert: true, new: true },
        );

        if (!createApiKeyResponse) throw new FORBIDDEN("Create API Key Failed");

        return { apiKey, timestamp };
    };

    getApiKey = async ({ userId }: IRequestGetApiKey) => {
        const getUsageResponse: IUsage = await UsageModel.findOne({ userId }).select("apiKeys -_id");

        if (!getUsageResponse || !getUsageResponse.apiKeys) {
            throw new FORBIDDEN("You don't have any API Key");
        }
        const timestamps = getUsageResponse.apiKeys.map(
            (apiKeyObj: { timestamp: string; apiKey: string }) => apiKeyObj.timestamp,
        );

        return { apiKeys: timestamps };
    };

    deleteApiKey = async ({ userId, timestamp }: IRequestDeleteApiKey) => {
        const updateResult = await UsageModel.findOneAndUpdate(
            { userId },
            { $pull: { apiKeys: { timestamp } } },
            { new: true },
        );

        if (!updateResult) throw new FORBIDDEN("Delete API Key Failed");

        return { deleteApiKey: true, userId, timestamp };
    };
}

export default new UsageService();
