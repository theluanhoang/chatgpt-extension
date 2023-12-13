export interface ITransaction {
    _id: string;
    userId: string;
    cash: number;
    cassoTransactionId: string;
    bankTransactionId: string;
}

export interface IRequestSaveTransaction {
    userId: string;
    cash: number;
    cassoTransactionId: number;
    bankTransactionId: string;
}
