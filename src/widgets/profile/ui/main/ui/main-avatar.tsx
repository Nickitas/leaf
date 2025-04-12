"use client";

import React, { FC, useState } from 'react';
import { Avatar } from '@heroui/avatar';
import { user } from '@/entities/user/model/mock/user';

interface MainAvatarProps {
    isEditing: boolean;
}

export const MainAvatar: FC<MainAvatarProps> = (
    isEditing,
) => {
    const [avatar, setAvatar] = useState<string>('/default-avatar.jpg');

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target?.result) {
                    setAvatar(event.target.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <Avatar showFallback name="Jane" src={avatar} className="h-32 w-32 mb-4 relative group">
                {isEditing && (
                    <label className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer rounded-full">
                        <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleAvatarChange}
                        />
                        <span className="text-white text-sm font-medium">
                            Сменить фото
                        </span>
                    </label>
                )}
            </Avatar>

            {!isEditing && (
                <>
                    <h2 className="text-xl font-semibold">{user.name}</h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        Участник с {new Date(user.joinDate).getFullYear()}
                    </p>
                </>
            )}
        </div>
    );
};