import React, { FC, useState, } from "react";

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import {Avatar} from "@heroui/avatar";

import { EcoProgress } from "@/shared/ui/progress/EcoProgress";
import { ProfileStats } from "@/widgets/profile/ui/main/profile-stats";
import { user } from "@/entities/user/model/mock/user";
import { Chip } from "@heroui/chip";

const profileSchema = z.object({
  name: z.string().min(2, 'Имя слишком короткое'),
  email: z.string().email('Некорректный email'),
  bio: z.string().max(200, 'Слишком длинное описание').optional(),
});

type ProfileFormData = z.infer<typeof profileSchema>;

export const Main: FC = () => {

    const [isEditing, setIsEditing] = useState(false);
    const [avatar, setAvatar] = useState('/default-avatar.jpg');

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
        <div className="space-y-6">
            {/* Заголовок и кнопка редактирования */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Мой профиль</h1>
                {isEditing ? (
                    <div className="space-x-2">
                        <Button
                            variant='ghost'
                            color='danger'
                            onPress={() => {
                                reset();
                                setIsEditing(false);
                            }}
                        >
                            Отмена
                        </Button>
                        <Button
                            variant="solid"
                            onPress={() => handleSubmit(onSubmit)}
                        >
                            Сохранить
                        </Button>
                    </div>
                ) : (
                    <Button color='success' onPress={() => setIsEditing(true)}>
                        Редактировать
                    </Button>
                )}
            </div>

            {/* Основная информация */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Аватар и уровень */}
                <div className="space-y-6">
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

                    {/* Уровень пользователя */}
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                        <h3 className="font-medium mb-2">Уровень эко-активиста</h3>
                        <div className="flex items-center space-x-2 mb-1">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className={`w-5 h-5 ${i < user.level ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-sm font-medium">
                                Уровень {user.level}
                            </span>
                        </div>
                        <EcoProgress value={user.levelProgress} />
                    </div>
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
                    <div>
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
            <ProfileStats />
        </div>
    );
};