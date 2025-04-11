'use client';

import { useForm } from 'react-hook-form';
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
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-2">
        <div className="flex-1">
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
            className="w-full"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="whitespace-nowrap"
        >
          {isSubmitting ? 'Отправка...' : 'Подписаться'}
        </Button>
      </form>
    </div>
  );
};