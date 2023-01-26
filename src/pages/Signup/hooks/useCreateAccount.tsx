import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { useToast } from 'react-native-toast-notifications';
import useCustomToast from '../../../hooks/useCustomToast';
import axiosDbIntance from '../../../utils/axiosInstance';

type userData = {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
};

export default function useCreateAccount() {
  const { toastError, toastSucess } = useCustomToast();
  const createUser = useMutation({
    mutationFn: ({ nombre, apellido, email, password }: userData) => {
      return axiosDbIntance.post('/user', {
        nombre: nombre.toLowerCase(),
        apellido,
        email,
        password,
      });
    },
    onError: (error: any) => {
      if (error?.response?.data?.message) {
        toastError(error?.response?.data?.message);
        return;
      }
      toastError(error?.response?.data?.issues[0]?.message);
    },
    onSuccess: () => {
      toastSucess('Cuenta creada!');
    },
  });

  return { createUser };
}
