'use client';

import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';

type FormData = {
  email: string;
};

export const NewsletterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log('Subscribed:', data.email);
    await new Promise(resolve => setTimeout(resolve, 1000));
    reset();
    alert('Спасибо за подписку!');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-2xl mx-auto"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative space-y-4"
      >
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 400 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <div className="flex-1 relative">
            <Input
              type="email"
              placeholder="Ваш email"
              {...register('email', {
                required: 'Email обязателен',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Некорректный email',
                },
              })}
              className={`
                w-full py-4 px-5
                bg-white dark:bg-gray-800
                border border-gray-200 dark:border-gray-700
                rounded-lg
                focus:ring-2 focus:ring-primary-500
                focus:border-transparent
                transition-all
                ${errors.email ? 'border-red-500 dark:border-red-500' : ''}
              `}
            />
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm text-red-500 dark:text-red-400"
              >
                {errors.email.message}
              </motion.p>
            )}
          </div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button
              type="submit"
              disabled={isSubmitting}
              className={`
                w-full sm:w-auto py-4 px-8
                bg-gradient-to-r from-primary-500 to-primary-600
                hover:from-primary-600 hover:to-primary-700
                text-white font-medium
                rounded-lg
                shadow-md hover:shadow-lg
                transition-all
                whitespace-nowrap
              `}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Отправка...
                </span>
              ) : (
                'Подписаться на новости'
              )}
            </Button>
          </motion.div>
        </motion.div>

        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
          Подписываясь, вы соглашаетесь с нашей{' '}
          <a href="#" className="text-primary-600 dark:text-primary-400 hover:underline">
            Политикой конфиденциальности
          </a>
        </p>
      </form>

      {/* Успешная подписка (реализовать через состояние) */}
      {/* {isSuccess && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-green-50 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg text-center"
        >
          Спасибо за подписку! Проверьте вашу почту.
        </motion.div>
      )} */}
    </motion.div>
  );
};