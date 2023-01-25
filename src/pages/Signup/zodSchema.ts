import { z } from 'zod';

const createAccountSchema = z.object({
  nombre: z
    .string({
      required_error: 'Llenar campo nombre',
      invalid_type_error: 'Nombre debe ser texto',
    })
    .min(1, 'Llenar campo nombre'),
  apellido: z
    .string({
      required_error: 'Llenar campo apellido',
      invalid_type_error: 'Apellido debe ser texto',
    })
    .min(1, 'Llenar campo nombre'),

  email: z
    .string({
      required_error: 'Llenar campo correo',
      invalid_type_error: 'Correo debe ser texto',
    })
    .email('Ingrese un email valido'),
  password: z
    .string({
      required_error: 'Llenar campo contraseña',
      invalid_type_error: 'Contraseña debe ser texto',
    })
    .min(8, 'Minimo 8 caracteres'),
});

export default createAccountSchema;
