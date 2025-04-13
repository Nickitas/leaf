import { useState } from 'react';
import { apiInstance } from '@/shared/api/instance';
import { useRouter } from 'next/navigation';

interface CreateTransactionParams {
    amount: number;
    projectId?: string;
    type: 'donation' | 'refill';
}

export const useCreateTransaction = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const createTransaction = async ({ amount, projectId, type }: CreateTransactionParams) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await apiInstance({
                url: '/transactions/create',
                method: 'POST',
                data: { amount, projectId, type }
            });

            router.refresh();
            return response;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    return { createTransaction, isLoading, error };
};