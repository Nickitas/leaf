"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Checkbox } from "@heroui/checkbox";

import { AuthError, LoginFormData } from "../model";
import { appRoutes } from "@/kernel/routes";
import { useAuthStore } from "../store/auth.store";

export const LoginForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginFormData>();

  const router = useRouter();
  const { login } = useAuthStore();

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data, router);
    } catch (error) {
      setError("root", {
        type: "manual",
        message: (error as AuthError).message,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-lg mx-auto p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
    >
      <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Вход в аккаунт
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Email
          </label>
          <div className="relative">
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              {...register("email", {
                required: "Email обязателен",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Некорректный email",
                },
              })}
            />
            {errors.email && (
              <p className="w-[275px] mt-1 text-sm text-red-500 dark:text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Пароль
          </label>
          <div className="relative">
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              {...register("password", {
                required: "Пароль обязателен",
                minLength: {
                  value: 6,
                  message: "Пароль должен быть не менее 6 символов",
                },
              })}
            />
            {errors.password && (
              <p className="w-[275px] mt-1 text-sm text-red-500 dark:text-red-400">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Checkbox
            id="remember"
            defaultSelected
            color="success"
            // {...register("remember")}
          >
            Запомнить меня
          </Checkbox>

          <Link
            href={appRoutes.forgotPassword}
            className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
          >
            Забыли пароль?
          </Link>
        </div>

        {errors.root && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-[275px] text-sm text-red-500 dark:text-red-400 text-center"
          >
            {errors.root.message}
          </motion.div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-4 bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 focus:ring-offset-2"
        >
          {isSubmitting ? "Вход..." : "Войти"}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Ещё нет аккаунта?{" "}
          <Link
            href={appRoutes.signUp}
            className="font-medium text-primary-600 dark:text-primary-400 hover:underline"
          >
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </motion.div>
  );
};
