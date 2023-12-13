export interface IRequestTransaction {
    id: number;
    tid: string;
    description: string;
    amount: number;
    cusum_balance: number;
    when: string;
    bank_sub_acc_id: string;
    subAccId: string;
    bankName: string;
    bankAbbreviation: string;
    virtualAccount: string;
    virtualAccountName: string;
    corresponsiveName: string;
    corresponsiveAccount: string;
    corresponsiveBankId: string;
    corresponsiveBankName: string;
}
