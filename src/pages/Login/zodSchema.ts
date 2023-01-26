import { z } from 'zod';

const userLoginSchema = z.object({
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

export default userLoginSchema;
