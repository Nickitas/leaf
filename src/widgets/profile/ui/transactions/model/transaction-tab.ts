import { Transaction } from "./transactions";

export type TransactionTab = {
    key: string;
    title: string;
    filter?: (t: Transaction) => boolean;
    headerText: string;
};