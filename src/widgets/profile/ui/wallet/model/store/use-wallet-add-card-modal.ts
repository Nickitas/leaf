import { create } from 'zustand';

interface AddWalletCardModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onOpenChange: (isOpen: boolean) => void;
}

export const useWalletAddCardModal = create<AddWalletCardModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    onOpenChange: (isOpen) => set({ isOpen }),
}));