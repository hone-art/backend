import usersModel from "../models/users.model";
import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET_KEY;

interface User {
  user_name: string;
  uuid: string;
  img_id: number;
  display_name?: string;
}

const usersController = {

  getByUuid: async function (req: Request, res: Response) {
    try {
      const uuid: string = req.params.uuid;
      const user = await usersModel.getByUuid(uuid);

      const token = jwt.sign({ id: user?.id, user_name: user?.user_name, uuid: user?.uuid, img_id: user!.img_id, display_name: user!.display_name }, SECRET_KEY as string, {
        expiresIn: '24hr',
      });

      res.cookie('authToken', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        maxAge: 86400000,
      });

      res.status(200).send(user);
    } catch (e) {
      console.log(e);
      res.status(400).send("Bad request");
    }
  },

  getById: async function (req: Request, res: Response) {
    try {
      const id: number = parseInt(req.params.id);
      const user = await usersModel.getById(id);

      res.status(200).send(user);
    } catch (e) {
      console.log(e);
      res.status(400).send("Bad request");
    }
  },

  getByUsername: async function (req: Request, res: Response) {
    try {
      const user_name: string = req.body.user_name;
      const user = await usersModel.getByUsername(user_name);
      if (user == null) res.status(400).send("no user found");
      else res.status(200).send(user);
    } catch (e) {
      console.log(e);
      res.status(400).send("Bad request");
    }
  },

  create: async function (req: Request, res: Response) {
    try {
      const userData: User = req.body;
      const newUser = await usersModel.create(userData);

      const token = jwt.sign({ id: newUser?.id, user_name: newUser?.user_name, uuid: newUser?.uuid, img_id: newUser!.img_id, display_name: newUser!.display_name }, SECRET_KEY as string, {
        expiresIn: '24hr',
      });

      res.cookie('authToken', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        maxAge: 86400000,
      });

      res.status(200).send(newUser);
    } catch (e) {
      console.log(e);
      res.status(400).send("Bad request");
    }
  },

  update: async function (req: Request, res: Response) {
    try {
      const id: number = parseInt(req.params.id);
      const dataToUpdate = req.body;
      const updatedUser = await usersModel.update(id, dataToUpdate);
      res.status(200).send(updatedUser);
    } catch (e) {
      console.log(e);
      res.status(400).send("Bad request");
    }
  },

}
export default usersController;