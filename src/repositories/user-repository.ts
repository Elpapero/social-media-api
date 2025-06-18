import { PrismaClient } from "@prisma/client";
import { UserModel } from "../models/user.model";

const prisma = new PrismaClient();

export const findAllUsers = async (): Promise<UserModel[]> => {
  return await prisma.user.findMany();
};

export const insertUser = async (data: UserModel): Promise<UserModel> => {
    return await prisma.user.create({ data });
};