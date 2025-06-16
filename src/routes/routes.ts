import { Router } from "express";
import * as UserController from "../controller/user-controller";

const routes = Router();

routes.get('/users', UserController.getUser);

//routes.post('users');

export default routes;