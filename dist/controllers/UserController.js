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
exports.loginUser = exports.createUser = void 0;
const Users_1 = __importDefault(require("../schema/Users"));
const mongoose = require('mongoose');
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, apellido, email, password } = req.body;
    try {
        const checkEmailExist = yield Users_1.default.findOne({ email });
        if (checkEmailExist) {
            res.status(400).json({ message: 'Este correo ya esta registrado!' });
            return;
        }
        const userCreated = yield Users_1.default.collection.insertOne({
            nombre,
            apellido,
            email,
            password,
        });
        res.status(200).json({ message: 'usuario creado!', data: userCreated });
    }
    catch (error) {
        res
            .status(500)
            .json({ message: 'No se pudo crear su cuenta, intentelo nuevamente' });
        return;
    }
});
exports.createUser = createUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield Users_1.default.findOne({ email, password });
        if (user) {
            res
                .status(200)
                .json({ message: 'Un gusto tenerte de vuelta!', data: user });
            return;
        }
        if (!user) {
            res.status(400).json({ message: 'Contraseña o correo incorrectos' });
            return;
        }
    }
    catch (error) {
        res.status(500).json({ message: 'No se pudo iniciar sesión' });
        return;
    }
});
exports.loginUser = loginUser;
