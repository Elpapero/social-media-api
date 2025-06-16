import { Request, Response } from 'express';
import * as service from "../services/user-service";
import * as HttpStatusCode from "../utils/http-status-code";

export const getUser = async (req: Request, res: Response) => {
  const httpResponse = await service.getUserService();

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postUser = async (req: Request, res: Response) => {
  const bodyValue = req.body;
  const httpResponse = await service.createUserService(bodyValue)
  if (httpResponse) {
    res.json(httpResponse.body);
  } else {
    const response = await HttpStatusCode.badRequest();
    res.json(response.body);
  }
};