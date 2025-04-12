import { Button } from "@heroui/button";
import React, { FC } from "react";
import { walletList } from "../model/mock/wallets-list";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";


export const WalletLastTransactions: FC = () => {

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
                    {walletList.transactions.map((transaction) => (
                        <div key={transaction.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">{transaction.description}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {new Date(transaction.date).toLocaleDateString('ru-RU')}
                                    </p>
                                </div>
                                <p
                                    className={`font-medium ${transaction.type === 'deposit' || transaction.type === 'bonus'
                                        ? 'text-green-600 dark:text-green-400'
                                        : 'text-red-600 dark:text-red-400'
                                        }`}
                                >
                                    {transaction.type === 'deposit' || transaction.type === 'bonus' ? '+' : '-'}
                                    {Math.abs(transaction.amount)} ₽
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardBody>
            <CardFooter className="justify-center">
                <Button variant="ghost">Показать еще</Button>
            </CardFooter>
        </Card>
    )
}