"use client";

import React, { useMemo } from "react";
import { Tabs, Tab } from "@heroui/tabs";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Transaction, transactions } from "../model/transactions";
import { TransactionList } from "./transaction-list";
import { tabsConfig } from "../config/transactions-tab";
import { ITransaction } from "@/entities/transaction/model";

export const TransactionTabs = () => {

    const filteredTransactions = useMemo(() => {
        const cache: Record<string, Transaction[]> = {};
        tabsConfig.forEach((tab) => {
            cache[tab.key] = tab.filter
                ? transactions.filter(tab.filter)
                : [...transactions];
        });
        return cache;
    }, [transactions]);

    return (
        <Tabs aria-label="Типы транзакций">
            {tabsConfig.map((tab) => (
                <Tab key={tab.key} title={tab.title}>
                    <Card>
                        <CardHeader>{tab.headerText}</CardHeader>
                        <CardBody className="p-0">
                            <TransactionList transactions={filteredTransactions[tab.key]} />
                        </CardBody>
                    </Card>
                </Tab>
            ))}
        </Tabs>
    );
};