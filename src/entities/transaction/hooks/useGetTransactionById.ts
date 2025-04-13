"use client"

import { useEffect, useState } from "react";
import { ITransaction } from "../model";
import {  getTransactionById } from "../api";

export const useGetTransactionById = (id: ITransaction["id"]) => {
  const [transaction, setTransaction] = useState<ITransaction>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchTransactionById = async () => {
    setIsLoading(true);

    try {
      const response = await getTransactionById(id);
      setTransaction(response.project);
      if (response === null) {
        setIsError(true);
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  // Функция для повторной загрузки данных
  const refetch = async () => {
    await fetchTransactionById();
  };

  // Загрузка при монтировании компонента
  useEffect(() => {
    refetch();
  }, []);

  return { transaction, isLoading, isError, refetch };
};