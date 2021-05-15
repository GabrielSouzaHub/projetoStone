import {Router} from "express";
import { FundraisingController } from "./controllers/FundraisingController";
import { UsersController } from "./controllers/UsersController";
import { TransactionsController } from "./controllers/TransactionsController";
const routes = Router();

const usersController = new UsersController();
const fundraisingController = new FundraisingController();
const transactionController = new TransactionsController();

routes.get("/users/:id", usersController.getOnlyOne)
routes.get("/users", usersController.get)
routes.post("/users", usersController.create);
routes.delete("/users/:id", usersController.deleted)

routes.get("/fundraising", fundraisingController.get)
routes.post("/fundraising", fundraisingController.create);

routes.get("/transaction", transactionController.get);
routes.post("/t", transactionController.create)
export {routes};