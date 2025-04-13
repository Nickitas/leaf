"use client";

import { useEffect, useState } from "react";
import { IUser } from "../model";
import { getUser } from "../api";

export const useGetUser = () => {
  const [user, setUser] = useState<IUser>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchUser = async () => {
    setIsLoading(true);

    try {
      const response = await getUser();
      setUser(response.user);
      if (!response) {
        setIsError(true);
        return;
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
    await fetchUser();
  };

  // Загрузка при монтировании компонента
  useEffect(() => {
    refetch();
  }, []);

  return { user, isLoading, isError, refetch };
};
