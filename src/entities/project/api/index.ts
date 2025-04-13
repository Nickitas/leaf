import apiInstance from "@/shared/api/instance";
import { IProjectRequest, IProjectResponse } from "../model";

/**
 * Создание проекта.
 * @param data - параметры проекта.
 * @returns Promise с результатом операции.
 */
export const creatProject = async (
  data: IProjectRequest
): Promise<{ project: IProjectResponse }> => {
  try {
    const response = await apiInstance<{ project: IProjectResponse }>({
      method: "POST",
      url: "/projects/create",
      data,
    });

    return response;
  } catch (error) {
    console.error("Ошибка при создании проекта:", error);
    throw new Error("Ошибка при создании проекта.");
  }
};

/**
 * Получение проектов.
 * @param limit - количество полученных проектов.
 * @param offset - пропущенные при получении.
 * @returns Promise с результатом операции.
 */
export const getProjects = async (
  limit: number,
  offset: number
): Promise<{ list: IProjectResponse[] }> => {
  try {
    const response = await apiInstance<{ list: IProjectResponse[] }>({
      method: "GET",
      url: "/projects/create",
      params: { limit, offset },
    });
    return response;
  } catch (error) {
    console.error("Ошибка при получении проектов:", error);
    throw new Error("Ошибка при получении проектов.");
  }
};

/**
 * Получение подробной информации о проекте.
 * @param id - id нужного проекта.
 * @returns Promise с результатом операции.
 */
export const getProjectById = async (
  id: IProjectRequest["id"]
): Promise<{ project: IProjectResponse }> => {
  try {
    const response = await apiInstance<{ project: IProjectResponse }>({
      method: "GET",
      url: `/projects/${id}`,
    });

    return response;
  } catch (error) {
    console.error("Ошибка при получении информации о проекте:", error);
    throw new Error("Ошибка при получении информации о проекте.");
  }
};

