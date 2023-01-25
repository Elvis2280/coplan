import { z } from 'zod';

const createUserSchema = z.object({
  body: z.object({
    nombre: z.string({ required_error: 'El campo nombre es requerido!' }),
    apellido: z.string({ required_error: 'El campo apellido es requerido!' }),
    email: z
      .string({ required_error: 'El campo email es requerido!' })
      .email('El dato no es un correo valido'),
    password: z
      .string({ required_error: 'El campo contraseña es requerido!' })
      .min(8, 'La contraseña debe tener al menos 8 caracteres'),
  }),
});

export { createUserSchema };
