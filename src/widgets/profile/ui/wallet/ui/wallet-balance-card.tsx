import React, { FC } from "react";
import { walletList } from "../model/mock/wallets-list";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { EcoProgress } from "@/shared/ui/progress/EcoProgress";

export const WalletBalanceCard: FC = () => {

    const progress = (walletList.balance / walletList.goal) * 100;

    return (
        <Card className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800">
            <CardHeader>
                <h2 className="text-xl font-semibold">Мой баланс</h2>
            </CardHeader>
            <CardBody>
                <div className="flex items-end justify-between">
                    <div>
                        <p className="text-4xl font-bold">{walletList.balance} ₽</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                            Цель: {walletList.goal} ₽
                        </p>
                    </div>
                    <Button variant="solid" size="lg">
                        Пополнить
                    </Button>
                </div>
                <EcoProgress value={progress} className="mt-4" />
            </CardBody>
        </Card>
    );
};