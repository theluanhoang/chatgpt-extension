export interface IUsage {
    _id: string;
    userId: string;
    cash: number;
    apiKeys: Array<{
        timestamp: string;
        apiKey: string;
    }>;
}

export interface IRequestDeleteApiKey {
    userId: string;
    timestamp: string;
}

export interface IRequestCreateApiKey {
    userId: string;
}

export interface IRequestGetApiKey extends IRequestCreateApiKey {}
