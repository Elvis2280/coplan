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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const Users_1 = __importDefault(require("../schema/Users"));
const mongoose = require('mongoose');
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, apellido, email, password } = req.body;
    try {
        const userCreated = yield Users_1.default.collection.insertOne({
            nombre,
            apellido,
            email,
            password,
        });
        console.log(userCreated);
        res.status(200).json({ message: 'usuario creado!' });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Ocurrio un error' });
        return;
    }
});
exports.createUser = createUser;
