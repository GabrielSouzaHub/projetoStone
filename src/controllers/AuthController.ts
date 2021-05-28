import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../models/User";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

class AuthController {
  async auth(req: Request, res: Response) {
    try {
      const usersRepository = getRepository(User);
      const { email } = req.body;

      const user = await usersRepository.findOne({ where: { email } });

      if (!user) return res.sendStatus(401);

      const token = jwt.sign({ id: user.user_id }, process.env.KEY_JWT);
      return res.json({
        user,
        token,
      });
    } catch (error) {
      return res.json(error);
    }
  }
}
export default new AuthController();
