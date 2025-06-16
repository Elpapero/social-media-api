import { PrismaClient, User } from "../generated/prisma";

const prisma = new PrismaClient();


export const findAllUsers = async (): Promise<User[]>  => {
    return await prisma.user.findMany();
  }

  
