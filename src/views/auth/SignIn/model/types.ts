export interface LoginFormData {
    email: string;
    password: string;
    remember?: boolean;
}

export interface AuthResponse {
    token: string;
    user: {
        id: string;
        email: string;
        name: string;
    };
}

export interface AuthError {
    message: string;
    code?: number;
}