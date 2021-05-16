"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("./database");
var routes_1 = require("./routes");
var cors_1 = __importDefault(require("cors"));
var port = 8080;
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(routes_1.routes);
app.listen(process.env.PORT || port, function () {
    console.log("Server running on localhost:" + port);
});
