import React, { FC } from "react";
import { Card, CardBody } from "@heroui/card";
import { statsList } from "../model/mock/stats-list";
import { EcoProgress } from "@/shared/ui/progress/EcoProgress";

export const BadgeStats: FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {statsList.map((stat) => (
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
    );
}
