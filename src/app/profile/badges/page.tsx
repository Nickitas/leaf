import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { EcoProgress } from "@/shared/ui/progress/EcoProgress";
import { TrophyIcon, AwardIcon, StarIcon, LeafIcon } from "lucide-react";

const badges = [
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

const stats = [
  { name: "Всего наград", value: 3, total: 10 },
  { name: "Уровень", value: 2, total: 5 },
  { name: "Эко-рейтинг", value: 87, total: 100 },
];

export default function Badges() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Мои достижения</h1>
        <Button variant="bordered">Поделиться</Button>
      </div>

      {/* Статистика */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardBody className="space-y-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {stat.name}
              </p>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-bold">
                  {stat.value}
                  {stat.total && (
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      /{stat.total}
                    </span>
                  )}
                </p>
                {stat.name === "Эко-рейтинг" && (
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">
                    +5 за неделю
                  </span>
                )}
              </div>
              <EcoProgress
                value={(stat.value / stat.total) * 100}
              />
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Награды */}
      <Card>
        <CardHeader>
          Мои награды
        </CardHeader>
        <CardBody className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className={`p-4 rounded-lg border ${
                badge.earned
                  ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20"
                  : "border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/50"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-full ${
                    badge.earned
                      ? "bg-green-100 dark:bg-green-800/50"
                      : "bg-gray-100 dark:bg-gray-700"
                  }`}
                >
                  {badge.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{badge.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {badge.description}
                  </p>
                  {badge.earned ? (
                    <p className="text-xs mt-2 text-green-600 dark:text-green-400">
                      Получено:{" "}
                      {new Date(badge.date || '').toLocaleDateString("ru-RU")}
                    </p>
                  ) : (
                    <div className="mt-2">
                      <EcoProgress
                        value={badge.progress}
                      />
                      <p className="text-xs mt-1 text-gray-500 dark:text-gray-400">
                        Прогресс: {badge.progress}%
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </CardBody>
      </Card>
    </div>
  );
}