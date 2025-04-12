import React, { FC } from 'react';

export const ProfileHead: FC = () => {
    return (
        <div className="bg-white dark:bg-gray-800 shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                    Мой аккаунт
                </h1>
            </div>
        </div>
    );
};