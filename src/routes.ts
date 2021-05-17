import {Router} from "express";
import  FundraisingController  from "./controllers/FundraisingController";
import UsersController from "./controllers/UsersController";
import TransactionsController from "./controllers/TransactionsController";
import AuthController  from "./controllers/AuthController";
// import authMiddleware from './middlewares/authMiddleware'
const routes = Router();

routes.post("/auth", AuthController.auth);
routes.get("/users/:id", UsersController.getOnlyOneUser);
// routes.get("/users", authMiddleware, usersController.index);
routes.get("/users", UsersController.getUsers);
routes.post("/users", UsersController.createUser);
routes.put("/users/:id", UsersController.updateUser);
routes.delete("/users/:id", UsersController.deleteUser);

routes.get("/fundraising", FundraisingController.get);
routes.post("/fundraising", FundraisingController.create);

routes.get("/transaction", TransactionsController.get);
routes.post("/transaction", TransactionsController.create);
export {routes};