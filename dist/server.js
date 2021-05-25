"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
require("./database");
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
const port = 8080;
exports.app = express_1.default();
exports.app.use(cors_1.default());
exports.app.use(express_1.default.json());
exports.app.use(routes_1.routes);
exports.app.listen(process.env.PORT || port, () => {
    console.log(`Server running on localhost:${port}`);
});
