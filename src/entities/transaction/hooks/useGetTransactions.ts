"use client";

import { useState, useEffect } from "react";
import { ITransaction } from "../model";
import { getTransactions } from "../api";

export const useGetTransactions = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [offset, setOfsset] = useState(0); // Текущее количество пропущенных транзакций

  // Функция для загрузки транзакций
  const fetchTransactions = async (limit: number, offset: number) => {
    setIsLoading(true);
    try {
      const response = await getTransactions(limit, offset);
      if (response) {
        if (offset === 0) {
          // Если offset = 0, это новая загрузка
          setTransactions(response.transactions);
          console.log(response.transactions);
        } else {
          // Иначе добавляем новые транзакции к уже загруженным
          setTransactions((prevPosts) => [...prevPosts, ...response.transactions]); // Добавляем новые транзакции к уже загруженным
        }
      }
      if (response === null) {
        setIsError(true);
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Функция для повторной загрузки данных
  const refetch = async () => {
    setOfsset(0);
    await fetchTransactions(20, 0);
  };

  // Загрузка при монтировании компонента
  useEffect(() => {
    refetch();
  }, []);

  // Функция для загрузки следующей порции проектов
  const loadMoreTransactions = async (limit: number) => {
    const newOfsset = offset + limit;
    await fetchTransactions(limit, newOfsset);
    setOfsset(newOfsset);
  };

  return { transactions, isLoading, isError, loadMoreTransactions, refetch };
};
