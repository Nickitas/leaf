import { create } from 'zustand';

interface WalletTransactionsStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onOpenChange: (isOpen: boolean) => void;
}

export const useWalletTransactions = create<WalletTransactionsStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    onOpenChange: (isOpen) => set({ isOpen }),
}));