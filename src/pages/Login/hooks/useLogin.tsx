import { useMutation } from '@tanstack/react-query';
import React from 'react';
import useCustomToast from '../../../hooks/useCustomToast';
import { useStoreUser } from '../../../store/zustandStore';
import axiosDbIntance from '../../../utils/axiosInstance';

type userData = {
  email: string;
  password: string;
};

export default function useLogin() {
  const setUser = useStoreUser((state) => state.setUser);
  const { toastSucess, toastError } = useCustomToast();
  const loginHandler = useMutation({
    mutationFn: ({ email, password }: userData) => {
      return axiosDbIntance.post('/user/login', {
        email: email.toLowerCase(),
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
    onSuccess: ({ data }) => {
      console.log(data.data);
      const userData = data.data;
      setUser({
        _id: userData._id,
        nombre: userData.nombre,
        apellido: userData.apellido,
        email: userData.email,
      });
      toastSucess(data.message);
    },
  });
  return { loginHandler };
}
