"use client";

import React, { FC } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';

import { appRoutes } from '@/kernel/routes';

import { Button } from '@heroui/button';

import { profileNav } from '../../config/profile-nav';
import { useAuthStore } from '@/entities/auth/store/auth.store';


export const ProfileMenu: FC = () => {
    const pathname = usePathname();
    const router = useRouter();

    const { logout } = useAuthStore();
    
    return (
        <nav className="space-y-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
            {profileNav.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className={clsx(
                        "flex items-center gap-3 px-4 py-3 rounded-md transition-colors",
                        pathname === item.href
                            ? "bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-200"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    )}
                >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                </Link>
            ))}
            <div className='flex flex-col gap-2 w-[100%]'>
                <Button color="primary" className="w-[100%]" as={Link} href={appRoutes.profile.createProject}>
                    Создать проект
                </Button>
                <Button
                    color='danger'
                    variant='bordered'
                    onPress={() => logout(router)}
                >
                    Выйти
                </Button>
            </div>
        </nav>
    );
};