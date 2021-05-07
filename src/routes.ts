import {Router} from 'express';
import UsersController from './controllers/User-controller';

const userController = new UsersController
const routes = Router();

routes.get("/user", userController.view )
routes.post("/user", userController.create)
export {routes}
