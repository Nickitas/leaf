"use client"

import { useEffect, useState } from "react";
import {  getTotalInvested } from "../api";

export const useGetTotalInvested = () => {
  const [totalInvested, setTotalInvested] = useState<number>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchTotalInvested = async () => {
    setIsLoading(true);

    try {
      const response = await getTotalInvested();
      setTotalInvested(response.totalInvested);
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
    await fetchTotalInvested();
  };

  // Загрузка при монтировании компонента
  useEffect(() => {
    refetch();
  }, []);

  return { totalInvested, isLoading, isError, refetch };
};