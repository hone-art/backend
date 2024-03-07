import usersModel from "../models/users.model";
import { Request, Response } from "express";

interface User {
  user_name: string;
  uuid: string;
  img_id?: number;
  display_name?: string;
}

const usersController = {

  getByUuid: async function (req: Request, res: Response) {
    try {
      const uuid: string = req.params.uuid;
      const user = await usersModel.getByUuid(uuid);
      res.status(200).send(user);
    } catch (e) {
      console.log(e);
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
    }
  },

  create: async function (req: Request, res: Response) {
    try {
      const userData: User = req.body;
      const newUser = await usersModel.create(userData);
      res.send(newUser);
    } catch (e) {
      console.log(e);
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
    }
  },

}
export default usersController;