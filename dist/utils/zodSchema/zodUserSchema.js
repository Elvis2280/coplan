"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserSchema = exports.createUserSchema = void 0;
const zod_1 = require("zod");
const createUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        nombre: zod_1.z.string({ required_error: 'El campo nombre es requerido!' }),
        apellido: zod_1.z.string({ required_error: 'El campo apellido es requerido!' }),
        email: zod_1.z
            .string({ required_error: 'El campo email es requerido!' })
            .email('El dato no es un correo valido'),
        password: zod_1.z
            .string({ required_error: 'El campo contraseña es requerido!' })
            .min(8, 'La contraseña debe tener al menos 8 caracteres'),
    }),
});
exports.createUserSchema = createUserSchema;
const loginUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z
            .string({ required_error: 'El campo email es requerido!' })
            .email('El dato no es un correo valido'),
        password: zod_1.z
            .string({ required_error: 'El campo contraseña es requerido!' })
            .min(8, 'La contraseña debe tener al menos 8 caracteres'),
    }),
});
exports.loginUserSchema = loginUserSchema;
