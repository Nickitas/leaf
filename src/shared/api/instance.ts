import { getCookie } from "cookies-next";
const baseUrl = "http://194.87.202.253:3015";

type ApiInstanceParams = {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  params?: URLSearchParams | Record<string, any> | string[][] | string;
  // signal: AbortSignal;
  data?: BodyType<unknown>;
  headers?: Record<string, any>;
};

export const apiInstance = async <T>({
  url,
  method,
  params,
  data,
  headers,
}: ApiInstanceParams): Promise<T> => {
  const token = (getCookie("accessToken") as string) || undefined;
  const response = await fetch(
    `${baseUrl}${url}` + new URLSearchParams(params),
    {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: token ?? "",
        ...headers,
      },
      ...(data ? { body: JSON.stringify(data) } : {}),
    }
  );

  return response.json();
};

export default apiInstance;

export type BodyType<BodyData> = BodyData;
