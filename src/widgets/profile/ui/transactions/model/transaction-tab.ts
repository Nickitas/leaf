import { ITransaction } from "@/entities/transaction";

export type TransactionTab = {
    key: string;
    title: string;
    filter?: (t: ITransaction) => boolean;
    headerText: string;
};