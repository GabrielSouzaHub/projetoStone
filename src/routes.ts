import {Router} from "express";
import { FundraisingController } from "./controllers/FundraisingController";
import { UsersController } from "./controllers/UsersController";
import { TransactionsController } from "./controllers/TransactionsController";
const routes = Router();

const usersController = new UsersController();
const fundraisingController = new FundraisingController();

routes.get("/users/:id", usersController.getOnlyOne)
routes.get("/users", usersController.get)
routes.post("/users", usersController.create);

routes.get("/fundraising", fundraisingController.get)
routes.post("/fundraising", fundraisingController.create);

routes.get("/transaction", TransactionsController.get);

export {routes};