import { PrismaClient } from "@prisma/client";
import { Product, ProductInput} from "../interfaces/products";

const prisma = new PrismaClient();

export const createProduct = async (data: any) => {
  const product = await prisma.products.create({
    data,
    select: {
      id: true,
      name: true,
      price: true,
      desc: true,
      img: true,
      status: true,
      createdAt: true,
      updatedAt: true
    },
  });
  console.log("service-product => ", product)
  return product;
};

export const getAllProducts = async (): Promise<Product[]> => {
  const product = await prisma.products.findMany({
    select: {
      id: true,
      name: true,
      desc: true,
      price: true,
      status: true,
      img: true,
      createdAt: true,
      updatedAt: true
    }
  })
  return product;
};

export const getProductById = async (id: number) => {
  const product = await prisma.products.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      desc: true,
      price: true,
      status: true,
      img: true,
      createdAt: true,
      updatedAt: true
    }
  });
  return product;
};

export const updateProduct = async (id: number, data: any) => {
  const product = await prisma.products.update({
    where: {
      id,
    },
    data,
    select: {
      id: true,
      name: true,
      desc: true,
      price: true,
      status: true,
      img: true,
      createdAt: true,
      updatedAt: true
    },
  });
  return product;
};

export const deleteProduct = async (id: number) => {
  const product = await prisma.products.delete({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      desc: true,
      price: true,
      status: true,
      img: true,
      createdAt: true,
      updatedAt: true
    }
  });
  return product;
};
