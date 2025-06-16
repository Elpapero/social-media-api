import { Request, Response } from 'express';
import * as service from "../services/user-service";

export const getUser = async (req: Request, res: Response) => {
  const httpResponse = await service.getUserService();

  res.status(httpResponse.statusCode).json(httpResponse.body);
};