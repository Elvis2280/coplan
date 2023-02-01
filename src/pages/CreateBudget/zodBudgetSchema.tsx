import { z } from 'zod';

const userBudgetSchema = z.object({
  salario: z
    .number({
      required_error: 'Llenar campo salario',
      invalid_type_error: 'Correo debe ser texto',
    })
    .positive('El valor debe ser positivo'),
});

export default userBudgetSchema;
