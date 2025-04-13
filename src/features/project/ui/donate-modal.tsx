'use client';

import { useEffect, useState } from 'react';
import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@heroui/modal';
import { useDonateModal } from '@/features/project/model/use-donate-modal';
import { useCreateTransaction } from '@/entities/transaction/hooks/use-create-transaction';
import { useRouter } from 'next/navigation';

export const DonateModal = ({ 
  projectId, 
  variant = 'default',
  refetchProjects
}: { 
  projectId: string; 
  variant?: 'full' | 'default';
  refetchProjects?: () => Promise<void>; 
}) => {
    const { isOpen, onOpenChange, amount, setAmount, isLoading, error, setLoading, setError } = useDonateModal();
    const [localAmount, setLocalAmount] = useState(amount.toString());
    const { createTransaction } = useCreateTransaction();
    const router = useRouter(); 

    useEffect(() => {
        setLocalAmount(amount.toString());
    }, [amount, isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const numAmount = Number(localAmount);
        
        if (!isNaN(numAmount) && numAmount >= 1) {
            setAmount(numAmount);
            setLoading(true);
            setError(null);
            
            try {
                await createTransaction({
                    amount: numAmount,
                    projectId,
                    type: 'donation'
                });
                
                if (refetchProjects) {
                    await refetchProjects();
                }
                
                router.refresh();
                
                onOpenChange(false);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Ошибка при отправке пожертвования');
            } finally {
                setLoading(false);
            }
        } else {
            setError('Введите сумму больше 0');
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setLocalAmount(value === '' ? '0' : value.replace(/^0+/, '') || '0');
        }
    };

    return (
        <>
            {variant === 'full' ? (
                <Button className="w-full" onPress={() => onOpenChange(true)}>
                    Поддержать проект
                </Button>
            ) : (
                <Button variant='bordered' onPress={() => onOpenChange(true)}>
                    Поддержать
                </Button>
            )}

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    <form onSubmit={handleSubmit}>
                        <ModalHeader>Поддержать проект</ModalHeader>
                        <ModalBody className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Сумма пожертвования (₽)</label>
                                <Input
                                    type="number"
                                    value={localAmount}
                                    onChange={handleInputChange}
                                    min="1"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    required
                                />
                            </div>
                            
                            <div className="grid grid-cols-4 gap-2">
                                {[100, 500, 1000, 5000].map((value) => (
                                    <Button
                                        key={value}
                                        type="button"
                                        variant={amount === value ? 'solid' : 'bordered'}
                                        onPress={() => {
                                            setAmount(value);
                                            setLocalAmount(value.toString());
                                        }}
                                    >
                                        {value} ₽
                                    </Button>
                                ))}
                            </div>
                            
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" isLoading={isLoading}>
                                Подтвердить
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    );
};