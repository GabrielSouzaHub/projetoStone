"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
var typeorm_1 = require("typeorm");
var UsersRepository_1 = require("../repositories/UsersRepository");
// import {UsersService } from "../services/UsersService";
var UsersController = /** @class */ (function () {
    function UsersController() {
    }
    UsersController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var usersRepository, _a, username, email, password, profile_image, coins, birth, phone_number, cep, street, state, city, uf, enabled, userAlreadyExists, emailAlreadyExists, user, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 4, , 5]);
                        usersRepository = typeorm_1.getCustomRepository(UsersRepository_1.UsersRepository);
                        _a = req.body, username = _a.username, email = _a.email, password = _a.password, profile_image = _a.profile_image, coins = _a.coins, birth = _a.birth, phone_number = _a.phone_number, cep = _a.cep, street = _a.street, state = _a.state, city = _a.city, uf = _a.uf, enabled = _a.enabled;
                        return [4 /*yield*/, usersRepository.findOne({
                                username: username
                            })];
                    case 1:
                        userAlreadyExists = _c.sent();
                        return [4 /*yield*/, usersRepository.findOne({
                                email: email
                            })];
                    case 2:
                        emailAlreadyExists = _c.sent();
                        if (userAlreadyExists || emailAlreadyExists) {
                            return [2 /*return*/, res.status(400).json({ mensagem: "Nome de Usuário/Email já existe" })];
                        }
                        user = usersRepository.create({
                            username: username, email: email, password: password, profile_image: profile_image, coins: coins,
                            birth: birth, phone_number: phone_number, cep: cep, street: street, state: state, city: city,
                            uf: uf, enabled: enabled
                        });
                        return [4 /*yield*/, usersRepository.save(user)];
                    case 3:
                        _c.sent();
                        return [2 /*return*/, res.json(user)];
                    case 4:
                        _b = _c.sent();
                        return [2 /*return*/, res.status(400).json({
                                erro: true,
                                mensagem: "Usuário não cadastrado"
                            })];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    UsersController.prototype.get = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var usersRepository, users, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        usersRepository = typeorm_1.getCustomRepository(UsersRepository_1.UsersRepository);
                        return [4 /*yield*/, usersRepository.find({})];
                    case 1:
                        users = _b.sent();
                        return [2 /*return*/, res.json(users)];
                    case 2:
                        _a = _b.sent();
                        return [2 /*return*/, res.status(400).json({
                                error: true,
                                mensagem: "Nenhum usuário encontrado!"
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UsersController.prototype.getOnlyOne = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var usersRepository, id, user, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        usersRepository = typeorm_1.getCustomRepository(UsersRepository_1.UsersRepository);
                        id = req.params.id;
                        return [4 /*yield*/, usersRepository.findOne({ id: id })];
                    case 1:
                        user = _b.sent();
                        return [2 /*return*/, res.json(user)];
                    case 2:
                        _a = _b.sent();
                        return [2 /*return*/, res.status(400).json({
                                error: true,
                                mensagem: "Usuário não encontrado!"
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UsersController.prototype.deleted = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var usersRepository, id, user, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        usersRepository = typeorm_1.getCustomRepository(UsersRepository_1.UsersRepository);
                        id = req.params.id;
                        return [4 /*yield*/, usersRepository.findOne({ id: id })];
                    case 1:
                        user = _a.sent();
                        return [4 /*yield*/, usersRepository.delete(user)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.json({
                                mensagem: "Deletado com sucesso",
                                user: user
                            })];
                    case 3:
                        error_1 = _a.sent();
                        return [2 /*return*/, res.status(400).json({
                                erro: true,
                                mensagem: error_1
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return UsersController;
}());
exports.UsersController = UsersController;
