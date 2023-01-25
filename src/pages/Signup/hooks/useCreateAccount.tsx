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
  const { toastError } = useCustomToast();
  const createUser = useMutation({
    mutationFn: ({ nombre, apellido, email, password }: userData) => {
      return axiosDbIntance.post('/user', {
        nombre,
        apellido,
        email,
        password,
      });
    },
    onError: (error: any, variable, c) =>
      toastError(error?.response?.data?.issues[0]?.message),
  });

  return { createUser };
}
