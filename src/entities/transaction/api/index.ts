import apiInstance from "@/shared/api/instance";
import { ITransaction } from "../model";

/**
 * Создание транзакции.
 * @param data - параметры транзакции.
 * @returns Promise с результатом операции.
 */
export const creatTransaction = async (
  data: ITransaction
): Promise<ITransaction> => {
  try {
    const response = await apiInstance<ITransaction>({
      method: "POST",
      url: "/transactions/create",
      data,
    });

    return response;
  } catch (error) {
    console.error("Ошибка при создании транзакции:", error);
    throw new Error("Ошибка при создании транзакции.");
  }
};

/**
 * Получение транзакций.
 * @param limit - количество полученных транзакций.
 * @param offset - пропущенные при получении.
 * @returns Promise с результатом операции.
 */
export const getTransactions = async (
  limit: number,
  offset: number
): Promise<{ transactions: ITransaction[] }> => {
  try {
    const response = await apiInstance<{ transactions: ITransaction[] }>({
      method: "GET",
      url: `/transactions?limit=${limit}&offset=${offset}`,
    });
    return response;
  } catch (error) {
    console.error("Ошибка при получении транзакций:", error);
    throw new Error("Ошибка при получении транзакций.");
  }
};

/**
 * Получение подробной информации о транзакции.
 * @param id - id нужной транзакции.
 * @returns Promise с результатом операции.
 */
export const getTransactionById = async (
  id: ITransaction["id"]
): Promise<{ project: ITransaction }> => {
  try {
    const response = await apiInstance<{ project: ITransaction }>({
      method: "GET",
      url: `/transactions/${id}`,
    });

    return response;
  } catch (error) {
    console.error("Ошибка при получении информации о транзакции:", error);
    throw new Error("Ошибка при получении информации о транзакции.");
  }
};

/**
 * Получение общей суммы пожертвований.
 * @returns Promise с результатом операции.
 */
export const getTotalInvested = async (): Promise<{
  totalInvested: number;
}> => {
  try {
    const response = await apiInstance<{ totalInvested: number }>({
      method: "GET",
      url: `/transactions/total-invested`,
    });

    return response;
  } catch (error) {
    console.error("Ошибка при получении общей суммы пожертвований:", error);
    throw new Error("Ошибка при получении общей суммы пожертвований.");
  }
};
