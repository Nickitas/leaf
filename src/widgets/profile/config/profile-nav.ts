import { appRoutes } from "@/kernel/routes";

export const profileNav = [
    { name: 'Профиль', href: appRoutes.profile.main, icon: '👤' },
    { name: 'Кошелек', href: appRoutes.profile.wallet, icon: '💰' },
    { name: 'Транзакции', href: appRoutes.profile.transactions, icon: '📊' },
    { name: 'Бейджи', href: appRoutes.profile.badges, icon: '🏆' },
    { name: 'Мой вклад', href: appRoutes.profile.impact, icon: '🌱' },
];