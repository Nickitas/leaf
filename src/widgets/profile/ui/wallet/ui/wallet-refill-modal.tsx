"use client";

import React, { FC } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input,
} from "@heroui/react";
import { useWalletTransactions } from "../model/store/wallet-refill-modal-store";

export const WalletRefillModal: FC = () => {
    const { isOpen, onClose, onOpenChange } = useWalletTransactions();

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
                                // value={amount.toString()}
                                // onChange={(e) => setAmount(Number(e.target.value))}
                                endContent="₽"
                                className="mb-4"
                            />

                            {/* {error && (
                                <p className="text-red-500 text-sm mb-4">{error}</p>
                            )} */}
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="danger"
                                variant="light"
                                onPress={onClose}
                                // disabled={isLoading}
                            >
                                Отмена
                            </Button>
                            <Button
                                color="primary"
                                // onPress={submitTransaction}
                                // isLoading={isLoading}
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