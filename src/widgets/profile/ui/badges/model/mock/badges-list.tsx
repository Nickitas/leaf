import { TrophyIcon, AwardIcon, StarIcon, LeafIcon } from "lucide-react";


export const badgesList = [
    {
        id: "1",
        name: "Эко-энтузиаст",
        description: "Сделал первое пожертвование",
        icon: <LeafIcon className="w-6 h-6 text-green-500" />,
        earned: true,
        progress: 100,
        date: "2023-09-10",
    },
    {
        id: "2",
        name: "Зеленый защитник",
        description: "Пожертвовал более 5000 ₽",
        icon: <StarIcon className="w-6 h-6 text-yellow-500" />,
        earned: false,
        progress: 65,
        date: null,
    },
    {
        id: "3",
        name: "Эко-лидер",
        description: "Топ-10 в рейтинге активных участников",
        icon: <TrophyIcon className="w-6 h-6 text-amber-500" />,
        earned: true,
        progress: 100,
        date: "2023-10-05",
    },
    {
        id: "4",
        name: "Очиститель вод",
        description: "Поддержал 3 водных проекта",
        icon: <AwardIcon className="w-6 h-6 text-blue-500" />,
        earned: false,
        progress: 2,
        date: null,
    },
    {
        id: "5",
        name: "Лесной спасатель",
        description: "Участвовал в 5 посадках деревьев",
        icon: <LeafIcon className="w-6 h-6 text-green-600" />,
        earned: true,
        progress: 100,
        date: "2023-10-12",
    },
];