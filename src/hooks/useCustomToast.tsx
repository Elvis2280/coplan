import React from 'react';
import { useToast } from 'react-native-toast-notifications';

type Props = {};

export default function useCustomToast() {
  const toast = useToast();

  const toastSucess = (message: string) => {
    toast.show(message, {
      type: 'success',
      placement: 'top',
      duration: 2500,
      animationType: 'slide-in',
    });
  };

  const toastError = (message: string) => {
    toast.show(message, {
      type: 'danger',
      placement: 'top',
      duration: 2500,
      animationType: 'slide-in',
    });
  };

  const toastWarning = (message: string) => {
    toast.show(message, {
      type: 'warning',
      placement: 'top',
      duration: 2500,
      animationType: 'slide-in',
    });
  };
  return { toastSucess, toastError, toastWarning };
}
