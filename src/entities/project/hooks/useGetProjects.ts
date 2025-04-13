"use client";

import { useState, useEffect } from "react";
import { IProjectResponse } from "../model";
import { getProjects } from "../api";

export const useGetProjects = () => {
  const [projects, setProjects] = useState<IProjectResponse[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [offset, setOfsset] = useState(0); // Текущее количество пропущенных проектов

  // Функция для загрузки проектов
  const fetchProjects = async (limit: number, offset: number) => {
    setIsLoading(true);
    try {
      const response = await getProjects(limit, offset);
      if (response) {
        if (offset === 0) {
          // Если offset = 0, это новая загрузка
          setProjects(response.list);
        } else {
          // Иначе добавляем новые проекты к уже загруженным
          setProjects((prevPosts) => [...prevPosts, ...response.list]); // Добавляем новые проекты к уже загруженным
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
    await fetchProjects(20, 0);
  };

  // Загрузка при монтировании компонента
  useEffect(() => {
    refetch();
  }, []);

  // Функция для загрузки следующей порции проектов
  const loadMoreProjects = async (limit: number) => {
    const newOfsset = offset + limit;
    await fetchProjects(limit, newOfsset);
    setOfsset(newOfsset);
  };

  return { projects, isLoading, isError, loadMoreProjects, refetch };
};
