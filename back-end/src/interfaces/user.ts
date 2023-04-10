export interface User {
    id: number;
    name: string;
    email: string;
}

export interface UserInput {
    name: string;
    email: string;
    password: string;
    phone: string;
    createdAt?: Date;
    updatedAt?: Date;
}