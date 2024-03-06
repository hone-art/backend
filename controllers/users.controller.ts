import usersModel from "../models/users.model";
import { Request, Response } from "express";

const usersController = {

  getById: async function (req: Request, res: Response) {
    try {
      const id: number = parseInt(req.params.id);
      const user = await usersModel.getById(id);
      res.status(200).send(user);
    } catch (e) {
      console.log(e);
    }
  },

  create: async function (req: Request, res: Response) {
    const userData = req.body;
    const newUser = usersModel.create(userData);
    res.send(newUser);
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