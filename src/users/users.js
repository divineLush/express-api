"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
exports.userRoutes = express_1.default.Router();
exports.userRoutes.post('/login', (req, res) => {
    res.send('/users/login');
});
exports.userRoutes.post('/register', (req, res) => {
    res.send('/users/register');
});
