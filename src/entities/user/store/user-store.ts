import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IUser } from '../model';
import { getUser } from '../api';

type UserStore = {
    user: IUser | null;
    isLoading: boolean;
    isError: boolean;
    setUser: (user: IUser | null) => void;
    clearUser: () => void;
    fetchUser: () => Promise<void>;
};

export const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            user: null,
            isLoading: false,
            isError: false,
            setUser: (user) => set({ user }),
            clearUser: () => set({ user: null, isError: false }),
            fetchUser: async () => {
                set({ isLoading: true, isError: false });
                try {
                    const response = await getUser();
                    set({ user: response.user, isLoading: false });
                } catch (error) {
                    console.error('Failed to fetch user:', error);
                    set({ user: null, isError: true, isLoading: false });
                }
            },
        }),
        {
            name: 'user-storage',
        }
    )
);