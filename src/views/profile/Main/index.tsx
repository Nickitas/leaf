"use client";

import React, { FC, useState, } from "react";

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from "@heroui/input";

import { user } from "@/entities/user/model/mock/user";
import { Chip } from "@heroui/chip";
import { MainAvatar, MainHead, MainLevel, MainStats } from "@/widgets/profile";


const profileSchema = z.object({
  name: z.string().min(2, 'Имя слишком короткое'),
  email: z.string().email('Некорректный email'),
  bio: z.string().max(200, 'Слишком длинное описание').optional(),
});

type ProfileFormData = z.infer<typeof profileSchema>;

export const Main: FC = () => {

    const [isEditing, setIsEditing] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ProfileFormData>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            name: user.name,
            email: user.email,
            bio: user.bio,
        },
    });

    const onSubmit = (data: ProfileFormData) => {
        console.log('Profile updated:', data);
        setIsEditing(false);
        // Здесь будет вызов API для обновления данных
    };


    const handleEditCancel = () => {
        reset();
        setIsEditing(false);
    }

    return (
        <div className="space-y-6">
            <MainHead
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                editCancel={handleEditCancel}
                submit={handleSubmit(onSubmit)}
            />

            {/* Основная информация */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-6">
                    <MainAvatar isEditing={isEditing}  />
                    <MainLevel />
                </div>

                {/* Форма данных */}
                <div className="md:col-span-2 space-y-6">
                    {isEditing ? (
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Имя</label>
                                <Input
                                    {...register('name')}
                                    // error={errors.name?.message}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <Input
                                    type="email"
                                    {...register('email')}
                                    // error={errors.email?.message}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    О себе
                                </label>
                                <textarea
                                    {...register('bio')}
                                    rows={4}
                                    className={`w-full px-3 py-2 border rounded-lg ${errors.bio ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                                />
                                {errors.bio && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.bio.message}
                                    </p>
                                )}
                            </div>
                        </form>
                    ) : (
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Email
                                </h3>
                                <p className="mt-1">{user.email}</p>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    О себе
                                </h3>
                                <p className="mt-1 whitespace-pre-line">{user.bio}</p>
                            </div>
                        </div>
                    )}

                    {/* Бейджи */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold mb-3">Мои бейджи</h3>
                        <div className="flex flex-wrap gap-2">
                            {user.badges.map((badge) => (
                                <Chip
                                    key={badge}
                                    color="success"
                                >
                                    {badge}
                                </Chip>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <MainStats />
        </div>
    );
};