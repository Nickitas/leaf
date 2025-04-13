"use client";

import React, { useMemo } from "react";
import { Tabs, Tab } from "@heroui/tabs";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { TransactionList } from "./transaction-list";
import { tabsConfig } from "../config/transactions-tab";
import { ITransaction, useGetTransactions } from "@/entities/transaction";

export const TransactionTabs = () => {
    const { transactions } = useGetTransactions();

    const filteredTransactions = useMemo(() => {
        return tabsConfig.reduce((acc, tab) => {
          acc[tab.key] = tab.filter 
            ? transactions.filter(tab.filter)
            : transactions;
          return acc;
        }, {} as Record<string, ITransaction[]>);
      }, [transactions]);

    return (
        <Tabs aria-label="Типы транзакций" color="primary">
            {tabsConfig.map((tab) => (
                <Tab key={tab.key} title={tab.title}>
                    <Card>
                        <CardHeader>{tab.headerText}</CardHeader>
                        <CardBody className="p-0">
                            {transactions?.length === 0 ? (
                                <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                                    Нет транзакций
                                </div>
                            ) : (
                                <TransactionList transactions={filteredTransactions[tab.key]} />
                            )}
                        </CardBody>
                    </Card>
                </Tab>
            ))}
        </Tabs>
    );
};