'use client';

import { create } from 'zustand';

interface DonateModalStore {
    isOpen: boolean;
    amount: number;
    isLoading: boolean;
    error: string | null;
    setAmount: (amount: number) => void;
    onOpen: () => void;
    onClose: () => void;
    onOpenChange: (isOpen: boolean) => void;
    setLoading: (isLoading: boolean) => void;
    setError: (error: string | null) => void;
}

export const useDonateModal = create<DonateModalStore>((set) => ({
    isOpen: false,
    amount: 500,
    isLoading: false,
    error: null,

    setAmount: (amount) => set({ amount }),
    onOpen: () => set({ isOpen: true, error: null }),
    onClose: () => set({ isOpen: false, error: null }),
    onOpenChange: (isOpen) => set({ isOpen, error: isOpen ? null : undefined }),
    setLoading: (isLoading) => set({ isLoading }),
    setError: (error) => set({ error }),
}));