"use client";

import React, { FC } from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { EcoProgress } from "@/shared/ui/progress/EcoProgress";
import { WalletRefillModal } from "./wallet-refill-modal";
import { useWalletTransactions } from "../model/store/use-wallet-refill-modal-store";
import { useGetUser } from "@/entities/user";

export const WalletBalanceCard: FC = () => {
    const {user} = useGetUser()

    const goal = 5_000_000;

    const progress = user ? (user?.balance / goal) * 100 : 0;

    const { isOpen, onOpen } = useWalletTransactions();

    return (
        <>
            <Card className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800">
                <CardHeader>
                    <h2 className="text-xl font-semibold">Мой баланс</h2>
                </CardHeader>
                <CardBody>
                    <div className="flex items-end justify-between">
                        <div>
                            <p className="text-4xl font-bold">{user?.balance} ₽</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                Цель: {goal} ₽
                            </p>
                        </div>
                        <Button color="primary" variant="solid" size="lg" onPress={onOpen}>
                            Пополнить
                        </Button>
                    </div>
                    <EcoProgress value={progress} className="mt-4" />
                </CardBody>
            </Card>
            { isOpen && <WalletRefillModal />}
        </>
    );
};