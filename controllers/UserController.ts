import { Request, Response } from 'express';
import User from '../schema/Users';
const mongoose = require('mongoose');

const createUser = async (req: Request, res: Response) => {
  const { nombre, apellido, email, password } = req.body;
  try {
    const checkEmailExist = await User.findOne({ email });
    if (checkEmailExist) {
      res.status(400).json({ message: 'Este correo ya esta registrado!' });
      return;
    }
    const userCreated = await User.collection.insertOne({
      nombre,
      apellido,
      email,
      password,
    });

    res.status(200).json({ message: 'usuario creado!', data: userCreated });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: 'No se pudo crear su cuenta, intentelo nuevamente' });
    return;
  }
};

const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });

    if (user) {
      res
        .status(200)
        .json({ message: 'Un gusto tenerte de vuelta!', data: user });
      return;
    }
    if (!user) {
      res.status(400).json({ message: 'Contraseña o correo incorrectos' });
      return;
    }
  } catch (error: any) {
    res.status(500).json({ message: 'No se pudo iniciar sesión' });
    return;
  }
};

export { createUser, loginUser };
