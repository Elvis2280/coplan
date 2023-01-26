import { useMutation } from '@tanstack/react-query';
import React from 'react';
import useCustomToast from '../../../hooks/useCustomToast';
import axiosDbIntance from '../../../utils/axiosInstance';

type userData = {
  email: string;
  password: string;
};

export default function useLogin() {
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
      toastSucess(data.message);
    },
  });
  return { loginHandler };
}
