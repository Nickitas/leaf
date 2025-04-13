import { TransactionTab } from "../model/transaction-tab";

export const tabsConfig: TransactionTab[] = [
    {
        key: "all",
        title: "Все",
        headerText: "Список транзакций",
    },
    {
        key: "donations",
        title: "Донаты",
        filter: (t) => t.type === "donation",
        headerText: "Список пожертвований",
    },
    {
        key: "refill",
        title: "Зачисления",
        filter: (t) => t.type === "refill",
        headerText: "Список зачислений",
    },
    {
        key: "bonuses",
        title: "Бонусы",
        filter: (t) => t.type === "bonus",
        headerText: "Список бонусных начислений",
    },
];