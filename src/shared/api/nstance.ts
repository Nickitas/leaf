const baseUrl = '';

type ApiInstanceParams = {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    params?: URLSearchParams | Record<string, any> | string[][] | string;
    signal: AbortSignal;
    data?: BodyType<unknown>;
    headers?: Record<string, any>;
}

export const apiInstance = async <T>({
    url,
    method,
    params,
    data,
    headers,
    signal,
}: ApiInstanceParams): Promise<T> => {
    const response = await fetch(
        `${baseUrl}${url}` + new URLSearchParams(params), {
        method,
        headers,
        signal,
        ...(data ? { body: JSON.stringify(data) } : {} ),
    });

    return response.json();
}

export default apiInstance;

export type BodyType<BodyData> = BodyData;