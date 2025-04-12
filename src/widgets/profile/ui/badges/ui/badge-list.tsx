import React, { FC } from "react";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { badgesList } from "../model/mock/badges-list";
import { EcoProgress } from "@/shared/ui/progress/EcoProgress";

export const BadgeList: FC = () => {
    return (
        <Card>
            <CardHeader>
                Мои награды
            </CardHeader>
            <CardBody className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {badgesList.map((badge) => (
                    <div
                        key={badge.id}
                        className={`p-4 rounded-lg border ${badge.earned
                            ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20"
                            : "border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/50"
                            }`}
                    >
                        <div className="flex items-start gap-4">
                            <div
                                className={`p-3 rounded-full ${badge.earned
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
    );
}