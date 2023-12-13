import { UsageModel } from "@/models";
import { IRequestTransaction, IUsage } from "@/types";

class WebhooksService {
    handleBankTransfer = async (transactions: IRequestTransaction[]) => {
        console.log("transactions: ", transactions);

        const updatedUsageArray: (IUsage | null)[] = await Promise.all(
            transactions.map(async (transaction) => {
                const regex = /DGUPAYMENT-(\d+)/;
                const match = transaction.description.match(regex);
                const userId = match ? match[1] : null;

                if (userId) {
                    console.log("userId: ", userId);
                    console.log("transaction: ", transaction);

                    return await UsageModel.findOneAndUpdate(
                        { userId },
                        { $inc: { cash: transaction.amount } },
                        { upsert: true, new: true },
                    );
                }

                return null;
            }),
        );

        const updatedUsage = updatedUsageArray.filter((usage) => usage !== null);

        return { updatedUsage };
    };
}

export default new WebhooksService();
