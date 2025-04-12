"use client";

import React, { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { profileNav } from "../../config/profile-nav";

export const ProfileMenuMob: FC = () => {
    const pathname = usePathname()
    
    return (
        <div className="md:hidden overflow-x-auto pb-2">
            <div className="flex space-x-1 px-4 py-2">
                {profileNav.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={clsx(
                            "flex flex-col items-center px-4 py-2 rounded-md text-sm whitespace-nowrap",
                            pathname === item.href
                                ? "bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-200"
                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        )}
                    >
                        <span className="text-lg">{item.icon}</span>
                        <span>{item.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};