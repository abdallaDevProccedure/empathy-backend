export interface Product {
    id: number;
    name: string;
    desc: string;
    price: number;
    status: boolean;
    img: string;
    createdAt: Date;
    updatedAt: Date;
}[]

export interface ProductInput {
    name: string;
    desc?: string;
    price: number;
    status: string;
    img: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  