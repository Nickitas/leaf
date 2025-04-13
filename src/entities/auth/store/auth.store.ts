import { create } from 'zustand';
import { getCookie, setCookie, deleteCookie } from 'cookies-next';
import { IAuth } from '../model';
import { signIn } from '../api';
import { addToast } from '@heroui/toast';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { appRoutes } from '@/kernel/routes';

type AuthStore = {
    accessToken: string | null;
    isLoggedIn: boolean;
    login: (data: IAuth, router: AppRouterInstance) => Promise<void>;
    logout: (router: AppRouterInstance) => void;
    checkAuth: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
    accessToken: null,
    isLoggedIn: false,

    checkAuth: () => {
        const token = getCookie('accessToken');
        set({ accessToken: token?.toString() || null, isLoggedIn: !!token });
    },

    login: async (data: IAuth, router: AppRouterInstance) => {
        try {
            const response = await signIn(data);
            if (response.accessToken) {
                setCookie('accessToken', response.accessToken);
                addToast({
                    title: "Успешно",
                    color: "success",
                });
                setTimeout(() => {
                    router.push(appRoutes.profile.main);
                }, 1000);

                set({ accessToken: response.accessToken, isLoggedIn: true });

            } else {
                addToast({
                    title: "Ошибка авторизации!",
                    description: "Неверный логин или пароль",
                    color: "danger",
                });
                return;
            }
        } catch (error) {
            set({ accessToken: null, isLoggedIn: false });
            throw error;
        }
    },

    logout: async (router: AppRouterInstance) => {
        deleteCookie('accessToken');
        router.push(appRoutes.signIn);
        set({ accessToken: null, isLoggedIn: false });
    },
}));