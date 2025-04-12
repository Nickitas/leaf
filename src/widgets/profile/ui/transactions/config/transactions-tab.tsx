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
        key: "bonuses",
        title: "Бонусы",
        filter: (t) => t.type === "bonus",
        headerText: "Список бонусных начислений",
    },
    {
        key: "refunds",
        title: "Возвраты",
        filter: (t) => t.type === "refund",
        headerText: "Список возвратов",
    },
];