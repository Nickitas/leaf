"use client";

import React, { FC, useState } from "react";
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { useGetTransactions } from "@/entities/transaction";

export const WalletLastTransactions: FC = () => {
    const { transactions } = useGetTransactions();
    const [visibleCount, setVisibleCount] = useState<number>(4);

    const loadMore = () => {
        setVisibleCount(prev => prev + 4);
    };

    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between w-[100%]">
                    <h2 className="flex-grow text-xl font-semibold">Последние транзакции</h2>
                    <Button variant="ghost" size="sm">
                        Все транзакции
                    </Button>
                </div>
            </CardHeader>
            <CardBody className="p-0">
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    {transactions?.length === 0 ? (
                        <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                            Нет транзакций
                        </div>
                    ) : (
                        transactions
                            ?.slice(0, visibleCount)
                            .map((transaction) => (
                                <div 
                                    key={transaction.id} 
                                    className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium">
                                                {transaction.project?.title || "Без названия"}
                                            </p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                {transaction.updatedAt 
                                                    ? new Date(transaction.updatedAt).toLocaleDateString('ru-RU') 
                                                    : 'Нет даты'}
                                            </p>
                                        </div>
                                        <p
                                            className={`font-medium ${
                                                transaction.type === 'refill' || transaction.type === 'bonus'
                                                    ? 'text-green-600 dark:text-green-400'
                                                    : 'text-red-600 dark:text-red-400'
                                            }`}
                                        >
                                            {transaction.type === 'donation' || transaction.type === 'bonus' ? '+' : '-'}
                                            {Math.abs(transaction.amount)} ₽
                                        </p>
                                    </div>
                                </div>
                            ))
                    )}
                </div>
            </CardBody>
            {transactions && transactions.length > visibleCount && (
                <CardFooter className="justify-center">
                    <Button variant="ghost" onPress={loadMore}>
                        Показать еще
                    </Button>
                </CardFooter>
            )}
        </Card>
    );
};