'use client';

import { create } from 'zustand';

interface DonateModalStore {
    isOpen: boolean;
    amount: number;
    isLoading: boolean;
    setAmount: (amount: number) => void;
    onOpen: () => void;
    onClose: () => void;
    onOpenChange: (isOpen: boolean) => void;
    handleDonate: (projectId: string) => Promise<void>;
}

export const useDonateModal = create<DonateModalStore>((set) => ({
    isOpen: false,
    amount: 500,
    isLoading: false,

    setAmount: (amount) => set({ amount }),
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    onOpenChange: (isOpen) => set({ isOpen }),

    handleDonate: async (projectId) => {
        set({ isLoading: true });

        try {
            // Здесь запрос к API !!!
            

            // if (!response.ok) {
            //     throw new Error('Ошибка при отправке пожертвования');
            // }

            // Можно добавить обновление данных проекта или уведомление об успехе
        } catch (error) {
            console.error('Donation error:', error);
        } finally {
            set({ isLoading: false });
        }
    },
}));