'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

import { Button } from '@heroui/button';
import { Input } from '@heroui/input';

import { appRoutes } from '@/kernel/routes';
import { SocialAuth } from './social-auth';

type RegisterFormData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    terms: boolean;
};

export const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
        setError,
    } = useForm<RegisterFormData>();

    const onSubmit = async (data: RegisterFormData) => {
        if (data.password !== data.confirmPassword) {
            setError('confirmPassword', {
                type: 'manual',
                message: 'Пароли не совпадают',
            });
            return;
        }

        // Здесь будет API-запрос для регистрации
        console.log('Register data:', data);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md mx-auto"
        >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                {/* Заголовок */}
                <div className="p-8 pb-6">
                    <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">
                        Создать аккаунт
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-400">
                        Уже есть аккаунт?{' '}
                        <Link
                            href={appRoutes.signIn}
                            className="text-primary-600 dark:text-primary-400 hover:underline"
                        >
                            Войти
                        </Link>
                    </p>
                </div>

                <div className="px-8 pb-8">
                    <SocialAuth />
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300 dark:border-gray-600" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                                или через email
                            </span>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="px-8 pb-8 space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Имя
                        </label>
                        <Input
                            id="name"
                            type="text"
                            placeholder="Ваше имя"
                            {...register('name', {
                                required: 'Имя обязательно',
                                minLength: {
                                    value: 2,
                                    message: 'Имя должно быть не короче 2 символов',
                                },
                            })}
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Email
                        </label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            {...register('email', {
                                required: 'Email обязателен',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Некорректный email',
                                },
                            })}
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Пароль
                        </label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            {...register('password', {
                                required: 'Пароль обязателен',
                                minLength: {
                                    value: 8,
                                    message: 'Пароль должен быть не менее 8 символов',
                                },
                            })}
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Подтвердите пароль
                        </label>
                        <Input
                            id="confirmPassword"
                            type="password"
                            placeholder="••••••••"
                            {...register('confirmPassword', {
                                required: 'Подтверждение пароля обязательно',
                                validate: (value) =>
                                    value === watch('password') || 'Пароли не совпадают',
                            })}
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input
                                id="terms"
                                type="checkbox"
                                {...register('terms', {
                                    required: 'Необходимо согласие с условиями',
                                })}
                                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="terms" className="font-medium text-gray-700 dark:text-gray-300">
                                Я согласен с{' '}
                                <Link href={appRoutes.terms} className="text-primary-600 dark:text-primary-400 hover:underline">
                                    условиями использования
                                </Link>
                            </label>
                            {errors.terms && (
                                <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                                    {errors.terms.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 mt-4 bg-primary-600 hover:bg-primary-700 focus:ring-primary-500"
                    >
                        {isSubmitting ? 'Регистрация...' : 'Зарегистрироваться'}
                    </Button>
                </form>
            </div>
        </motion.div>
    );
};