import { PrismaClient, User } from "../generated/prisma";
import { UserModel } from "../models/user.model";

const prisma = new PrismaClient();

export const findAllUsers = async (): Promise<User[]> => {
  return await prisma.user.findMany();
};

export const insertUser = async (data: UserModel): Promise<User> => {
    return await prisma.user.create({ data });
};