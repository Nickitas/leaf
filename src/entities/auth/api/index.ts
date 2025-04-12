import { Roles } from "@/shared/types";
import apiInstance from "@/shared/api/instance";
import { IAuth } from "../model";
import { IUser } from "@/entities/user";

/**
 * Авторизация.
 * @param data - параметры авторизации (логин, пароль).
 * @returns Promise с результатом операции.
 */
export const signIn = async (
  data: IAuth
): Promise<{ accessToken: IUser["accessToken"] }> => {
  try {
    const response = await apiInstance<{
      accessToken: IUser["accessToken"];
      role: Roles;
    }>({
      method: "POST",
      url: "/signin",
      data,
    });

    return response;
  } catch (error) {
    console.error("Ошибка авторизации:", error);
    throw new Error("Ошибка авторизации.");
  }
};
