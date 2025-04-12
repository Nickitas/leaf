import React, { FC } from "react";
import { Tabs, Tab } from "@heroui/tabs";
import { transactions } from "../model/transactions";
import { TransactionList } from "./transaction-list";

export const TransactionTabs: FC = () => {
    return (
        <Tabs aria-label="Options">
            <Tab key="all" title="Все">
                <TransactionList transactions={transactions} />
            </Tab>
            <Tab key="donations" title="Пожертвования">
                <TransactionList
                    transactions={transactions.filter((t) => t.type === "donation")}
                />
            </Tab>
            <Tab key="bonuses" title="Бонусы">
                <TransactionList
                    transactions={transactions.filter((t) => t.type === "bonus")}
                />
            </Tab>
            <Tab key="refunds" title="Возвраты">
                <TransactionList
                    transactions={transactions.filter((t) => t.type === "refund")}
                />
            </Tab>
        </Tabs>
    );
};