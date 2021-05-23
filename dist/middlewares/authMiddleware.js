"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function authMiddleware(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ Mensagem: "Usuário não autorizado" });
    }
    const token = authorization.replace("Bearer", '').trim();
    try {
        const data = jsonwebtoken_1.default.verify(token, process.env.KEY_JWT);
        const { id } = data;
        req.userId = id;
        return next();
    }
    catch (_a) {
        return res.status(401);
    }
}
exports.default = authMiddleware;
