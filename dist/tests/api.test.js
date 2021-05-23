"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
test('adds 1 + 2 to equal 3', () => {
    const user = new User_1.User();
    user.username = 'Paulo';
    expect(user.username).toEqual('Paulo');
});
const supertest_1 = __importDefault(require("supertest"));
const server_1 = require("../server");
it('inserção de users', async () => {
    const res = await supertest_1.default(server_1.app)
        .get('/users');
    expect(res.body).toHaveProperty('mensagem');
});
