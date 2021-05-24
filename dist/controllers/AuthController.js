"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = require("../models/User");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class AuthController {
    async auth(req, res) {
        try {
            const usersRepository = typeorm_1.getRepository(User_1.User);
            const { email } = req.body;
            const user = await usersRepository.findOne({ where: { email } });
            // const isValidPassword = await bcrypt.compare(password, user.password);
            if (!user)
                return res.sendStatus(401);
            const token = jsonwebtoken_1.default.sign({ id: user.id }, process.env.KEY_JWT);
            //  delete (user.password)
            return res.json({
                user, token,
            });
        }
        catch (error) {
            return res.json(error);
        }
    }
}
exports.default = new AuthController();
