import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface userState {
  user: {
    _id: string;
    nombre: string;
    apellido: string;
    email: string;
  };
  setUser: (user: {
    _id: string;
    nombre: string;
    apellido: string;
    email: string;
  }) => void;
}

const useStoreUser = create<userState>((set, get) => ({
  user: {
    _id: '',
    nombre: '',
    apellido: '',
    email: '',
  },
  setUser: (userData) => set((state) => ({ ...state, user: userData })),
}));

export { useStoreUser };
