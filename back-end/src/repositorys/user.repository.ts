import { PrismaClient } from "@prisma/client";
import { User, UserInput} from "../interfaces/user";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const createUser = async (data: UserInput) => {
  const user = await prisma.user.create({
    data,
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      phone: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return user;
};

export const getAllUser = async (): Promise<User[]> => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      phone: true,
      createdAt: true,
      updatedAt: true,
      products: true
    }
  })
  return users;
};

export const getIdUser = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      phone: true,
      createdAt: true,
      updatedAt: true,
      products: true
    }
  });
  return user;
};

export const userUpdate = async (id: number, data: UserInput) => {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data,
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      phone: true,
      createdAt: true,
      updatedAt: true
    },
  });
  return user;
};

export const deleteUser = async (id: number) => {
  const user = await prisma.user.delete({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      phone: true,
      createdAt: true,
      updatedAt: true
    }
  });
  return user;
};

export const getUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email }, select: { password: true } });
  if (!user) {
    return null;
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return null;
  }

  return user;
};