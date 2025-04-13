"use client"

import { useGetUser } from "@/entities/user";
import React, { FC } from "react";

export const MainStats: FC = () => {
  const { user } = useGetUser();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
          ☁️ Сокращено CO₂:
        </h3>
        <p className="text-2xl font-bold mt-1">{user?.co2Reduced} кг</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
          🌳 Спасено деревьев:
        </h3>
        <p className="text-2xl font-bold mt-1">{user?.treesSaved}</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
          🧴 Утилизировано пластика:
        </h3>
        <p className="text-2xl font-bold mt-1">{user?.plasticReduced} кг</p>
      </div>
    </div>
  );
};
