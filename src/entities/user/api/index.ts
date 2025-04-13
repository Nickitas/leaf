import apiInstance from "@/shared/api/instance";
import { IUser } from "../model";
import { useUserStore } from "../store/user-store";

/**
 * Получение ползователя.
 * @returns Promise с результатом операции.
 */
export const getUser = async (): Promise<{ user: IUser }> => {
  try {
    const response = await apiInstance<{ user: IUser }>({
      method: "GET",
      url: "/user/profile",
    });

    useUserStore.getState().setUser(response.user);

    return response;
  } catch (error) {
    console.error("Пользователь не получен:", error);
    throw new Error("Пользователь не получен.");
  }
};
