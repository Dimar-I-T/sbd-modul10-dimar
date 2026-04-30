export interface RegisterForm {
    name: string;
    username: string;
    email: string;
    phone: string;
    password: string;
}

export interface LoginForm {
    email: string;
    password: string;
}

export interface User {
    name: string;
    username: string;
    email: string;
    phone: string;
    balance: number;
    token: string;
}

export interface Item {
    id: string;
    name: string;
    price: number;
    stock: number;
    created_at: string;
}

export interface Props {
    user: User;
}