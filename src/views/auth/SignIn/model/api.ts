import { LoginFormData, AuthResponse, AuthError } from './types';

export const login = async (data: LoginFormData): Promise<AuthResponse> => {
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const error: AuthError = await response.json();
        throw error;
    }

    return response.json();
};