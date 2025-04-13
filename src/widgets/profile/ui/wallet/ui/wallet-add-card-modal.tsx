"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@heroui/react";
import { useWalletAddCardModal } from "../model/store/use-wallet-add-card-modal";

export const WalletAddCardModal = () => {
  const { isOpen, onOpenChange } = useWalletAddCardModal();

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Привязать новую карту
            </ModalHeader>
            <ModalBody className="space-y-4">
              <Input
                label="Номер карты"
                placeholder="0000 0000 0000 0000"
                type="text"
                className="w-full"
              />
              
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Срок действия"
                  placeholder="ММ/ГГ"
                  type="text"
                />
                <Input
                  label="CVV/CVC"
                  placeholder="123"
                  type="password"
                />
              </div>
              
              <Input
                label="Имя владельца"
                placeholder="Как на карте"
                type="text"
              />
            </ModalBody>
            <ModalFooter>
              <Button 
                variant="light" 
                onPress={onClose}
              >
                Отмена
              </Button>
              <Button 
                color="primary"
                onPress={() => {
                  
                  onClose();
                }}
              >
                Привязать карту
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};