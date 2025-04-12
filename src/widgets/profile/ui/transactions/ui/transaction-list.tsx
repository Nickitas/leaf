import React, { FC } from "react";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Transaction } from "../model/transactions";

interface TransactionListProps {
    transactions: Transaction[];
}

export const TransactionList: FC<TransactionListProps> = ({ transactions }) => {
    return (
        <Card>
            <CardHeader>
                Список транзакций
            </CardHeader>
            <CardBody className="p-0">
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    {transactions.map((transaction) => (
                        <div
                            key={transaction.id}
                            className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">{transaction.project}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {new Date(transaction.date).toLocaleDateString("ru-RU", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })}
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span
                                        className={`px-2 py-1 text-xs rounded-full ${transaction.status === "completed"
                                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                            }`}
                                    >
                                        {transaction.status === "completed"
                                            ? "Завершено"
                                            : "В обработке"}
                                    </span>
                                    <p
                                        className={`font-medium ${transaction.type === "donation" ||
                                            transaction.type === "bonus"
                                            ? "text-green-600 dark:text-green-400"
                                            : "text-primary-600 dark:text-primary-400"
                                            }`}
                                    >
                                        {transaction.type === "refund" ? "+" : "-"}
                                        {Math.abs(transaction.amount)} ₽
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardBody>
        </Card>
    );
};