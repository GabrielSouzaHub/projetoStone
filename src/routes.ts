import {Router} from "express";
import  FundraisingController  from "./controllers/FundraisingController";
import UsersController from "./controllers/UsersController";
import TransactionsController from "./controllers/TransactionsController";
import AuthController  from "./controllers/AuthController";
import multer from 'multer';
import multerConfig from "./config/multer";


// import authMiddleware from './middlewares/authMiddleware'
const routes = Router();

routes.post("/auth", AuthController.auth);
routes.get("/users/:id", UsersController.getOnlyOneUser);
// routes.get("/users", authMiddleware, usersController.index);
routes.get("/users", UsersController.getUsers);
routes.post("/users", multer(multerConfig).single('profile_image'), UsersController.createUser);
routes.put("/users/:id", UsersController.updateUser);
routes.delete("/users/:id", UsersController.deleteUser);

routes.post("/fundraising", FundraisingController.createFundraising);
routes.get("/fundraising", FundraisingController.getFundraisings);
routes.get("/fundraising/:id", FundraisingController.getOnlyOneFundraising);
routes.put("/fundraising/:id", FundraisingController.updateFundraising);

routes.get("/transaction", TransactionsController.get);
routes.post("/transaction", TransactionsController.create);
export {routes};