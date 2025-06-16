import * as HttpStatusCode from "../utils/http-status-code";
import * as UserRepository from "../repository/user-repository";

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