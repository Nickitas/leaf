export type SiteConfig = typeof siteConfig;
import { appRoutes } from "@/kernel/routes";

export const siteConfig = {
  name: "Leaf",
  description: "Привлекаем широкую аудиторию к общим экологическим целям через доступные инструменты и прозрачность проектов",
  navItems: [
    {
      label: "Как это работает?",
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
      label: "Как это работает?",
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
  ],
  links: {
    github: 'https://github.com/Nickitas/leaf'
,  },
};
