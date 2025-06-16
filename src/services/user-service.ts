import * as HttpStatusCode from "../utils/http-status-code";
import * as UserRepository from "../repository/user-repository";
import { UserModel } from "../models/user.model";
import { User } from "../generated/prisma";

export const getUserService = async () => {
  const data = await UserRepository.findAllUsers();
  let response = null;

  if (data) {
    response = await HttpStatusCode.ok(data);
  } else {
    response = await HttpStatusCode.noContent();
  }

  return response;
};

export const createUserService = async (data: UserModel) => {
  let response = null;

  if (data) {
    await UserRepository.insertUser(data);
    response = await HttpStatusCode.created();
  } else {
    response = await HttpStatusCode.badRequest();
  }

  return response;
};
