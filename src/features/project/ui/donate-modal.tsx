'use client';

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input } from "@heroui/react";
import { useDonateModal } from "../model/use-donate-modal";

export const DonateModal = ({ 
  projectId,
  variant = 'button'
}: {
  projectId: string;
  variant?: 'button' | 'full';
}) => {
  const {
    isOpen,
    amount,
    setAmount,
    onOpen,
    onClose,
    onOpenChange,
    handleDonate,
    isLoading
  } = useDonateModal();

  return (
    <>
      {variant === 'button' ? (
        <Button color="primary" onPress={onOpen}>
          Поддержать проект
        </Button>
      ) : (
        <div className="space-y-4">
          <Input
            label="Сумма пожертвования"
            type="number"
            value={amount.toString()}
            onChange={(e) => setAmount(Number(e.target.value))}
            endContent="₽"
          />
          <Button 
            color="primary" 
            className="w-full"
            onPress={() => handleDonate}
            isLoading={isLoading}
          >
            Поддержать
          </Button>
        </div>
      )}

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Поддержать проект</ModalHeader>
              <ModalBody>
                <Input
                  label="Сумма пожертвования"
                  type="number"
                  value={amount.toString()}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  endContent="₽"
                  className="mb-4"
                />
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  Отмена
                </Button>
                <Button 
                  color="primary" 
                  onPress={() => {
                    handleDonate(projectId);
                    onClose();
                  }}
                  isLoading={isLoading}
                >
                  Подтвердить
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};