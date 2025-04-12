import React, { FC } from "react";

export const MainStats: FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Поддержано проектов
                </h3>
                <p className="text-2xl font-bold mt-1">12</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Волонтерских часов
                </h3>
                <p className="text-2xl font-bold mt-1">56</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Эко-рейтинг
                </h3>
                <p className="text-2xl font-bold mt-1">4.8/5</p>
            </div>
        </div>
    );
};