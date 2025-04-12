import React, { FC } from "react";

export const ProfileCard: FC = () => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-200">
                    👤
                </div>
                <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">
                        Иван Иванов
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Участник с 2023
                    </p>
                </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        Баланс
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                        1,245 ₽
                    </span>
                </div>
            </div>
        </div>
    );
};