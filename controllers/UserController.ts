import { Request, Response } from 'express';
import User from '../schema/Users';
const mongoose = require('mongoose');

const createUser = async (req: Request, res: Response) => {
  const { nombre, apellido, email, password } = req.body;
  try {
    const userCreated = await User.collection.insertOne({
      nombre,
      apellido,
      email,
      password,
    });

    console.log(userCreated);
    res.status(200).json({ message: 'usuario creado!' });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: 'Ocurrio un error' });
    return;
  }
};

export { createUser };
