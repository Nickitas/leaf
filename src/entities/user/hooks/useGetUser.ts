"use client";

import { useEffect } from "react";
import { useUserStore } from "../store/user-store";

export const useGetUser = () => {
  const { user, isLoading, isError, fetchUser } = useUserStore();

  useEffect(() => {
    if (!user && !isLoading && !isError) {
      fetchUser();
    }
  }, [user, isLoading, isError, fetchUser]);

  return {
    user,
    isLoading,
    isError,
    refetch: fetchUser
  };
};