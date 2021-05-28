"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
const supertest_1 = __importDefault(require("supertest"));
const server_1 = require("../server");
describe("Test My app server", () => {
    it("should get main route", async (done) => {
        const res = await supertest_1.default(server_1.app).get("/users");
        expect(res.body).toHaveProperty("error");
        done();
    });
    test("adds 1 + 2 to equal 3", () => {
        const user = new User_1.User();
        user.username = "Paulo";
        expect(user.username).toEqual("Paulo");
    });
    it("insert error post in route users", async (done) => {
        const res = await supertest_1.default(server_1.app).post("/users").send({
            profile_image: "asdffafd_fqwf341234",
        });
        expect(res.statusCode).toBe(400);
        done();
    });
});
describe("Users functional tests", () => {
    it("should return a users  with values", async (done) => {
        const users = {
            email: "Jacksonzinho123@gmail.com",
            profile_image: "https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/opensource.jpg",
        };
        const response = await supertest_1.default(server_1.app).post("/users").send(users);
        expect(201);
        done();
    });
});
