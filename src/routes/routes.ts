import { Router } from "express";
import * as UserController from "../controller/user-controller";

const routes = Router();

routes.get('/users', UserController.getUser);

routes.post('/users', UserController.postUser);

export default routes;