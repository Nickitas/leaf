"use client"

import { useEffect, useState } from "react";
import { IProjectRequest, IProjectResponse } from "../model";
import {  getProjectById } from "../api";

export const useGetProjectById = (id: IProjectRequest["id"]) => {
  const [project, setProject] = useState<IProjectResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchProjectById = async () => {
    setIsLoading(true);

    try {
      const response = await getProjectById(id);
      setProject(response.project);
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
    await fetchProjectById();
  };

  // Загрузка при монтировании компонента
  useEffect(() => {
    refetch();
  }, []);

  return { project, isLoading, isError, refetch };
};