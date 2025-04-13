"use client";

import React, { FC, useState } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input,
} from "@heroui/react";
import { useWalletTransactions } from "../model/store/use-wallet-refill-modal-store";
import { useCreateTransaction } from "@/entities/transaction/hooks/use-create-transaction";

export const WalletRefillModal: FC = () => {
    const { isOpen, onClose, onOpenChange } = useWalletTransactions();
    const [amount, setAmount] = useState<number>(100);
    const { createTransaction, isLoading, error } = useCreateTransaction();

    const submitTransaction = async () => {
        try {
            await createTransaction({
                amount,
                type: "refill"
            });
            onClose();
        } catch (err) {
            console.error("Transaction error:", err);
        }
    };

    return (
        <Modal
            isDismissable={false}
            isKeyboardDismissDisabled={true}
            isOpen={isOpen}
            onOpenChange={onOpenChange}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            Пополнение баланса
                        </ModalHeader>
                        <ModalBody>
                            <Input
                                label="Сумма пополнения"
                                type="number"
                                value={amount.toString()}
                                onChange={(e) => setAmount(Number(e.target.value))}
                                endContent="₽"
                                className="mb-4"
                                min="1"
                            />

                            {error && (
                                <p className="text-red-500 text-sm mb-4">{error}</p>
                            )}
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="danger"
                                variant="light"
                                onPress={onClose}
                                disabled={isLoading}
                            >
                                Отмена
                            </Button>
                            <Button
                                color="primary"
                                onPress={submitTransaction}
                                isLoading={isLoading}
                                isDisabled={amount <= 0 || isLoading}
                            >
                                Пополнить
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};