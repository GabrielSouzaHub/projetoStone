import {Router} from "express";
import { FundraisingController } from "./controllers/FundraisingController";
import { UsersController } from "./controllers/UsersController";
import { TransactionsController } from "./controllers/TransactionsController";
const routes = Router();

const usersController = new UsersController();
const fundraisingController = new FundraisingController();
const transactionController = new TransactionsController();

routes.get("/users/:id", usersController.getOnlyOneUser);
routes.get("/users", usersController.getUsers);
routes.post("/users", usersController.createUser);
routes.put("/users/:id", usersController.updateUser);
routes.delete("/users/:id", usersController.deleteUser);

routes.get("/fundraising", fundraisingController.get);
routes.post("/fundraising", fundraisingController.create);

routes.get("/transaction", transactionController.get);
routes.post("/t", transactionController.create);
export {routes};