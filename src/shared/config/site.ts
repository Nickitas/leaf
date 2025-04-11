export type SiteConfig = typeof siteConfig;
import { appRoutes } from "@/kernel/routes";

export const siteConfig = {
  name: "Live",
  description: "",
  navItems: [
    {
      label: "Главная",
      href: appRoutes.home,
    },
    {
      label: "Как это работает",
      href: appRoutes.howItWorks,
    },
    {
      label: "Наши проекты",
      href: appRoutes.projects.main,
    },
    {
      label: "О нас",
      href: appRoutes.about,
    },
  ],
  navMenuItems: [
    {
      label: "Как это работает",
      href: appRoutes.howItWorks,
    },
    {
      label: "Наши проекты",
      href: appRoutes.projects.main,
    },
    {
      label: "О Нас",
      href: appRoutes.about,
    },
    {
      label: "Доска рейтинга",
      href: appRoutes.leaderboard,
    },
    {
      label: "Рейтинг ESG",
      href: appRoutes.esgRatings,
    },
    {
      label: "События",
      href: appRoutes.events,
    },
    {
      label: "Партнеры",
      href: appRoutes.partners,
    },
    {
      label: "Для бизнеса",
      href: appRoutes.business,
    },
    {
      label: "Профиль",
      href: appRoutes.profile.main,
    },
    {
      label: "Выход",
      href: "/logout",
    },
  ],
  links: {

  },
};
