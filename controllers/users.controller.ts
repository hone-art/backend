import usersModel from "../models/users.model";
import { Request, Response } from "express";

const usersController = {

  getById: async function (req: Request, res: Response) {
    const userid = req.body["user_id"];

    // let results = await usersModel.getById(username);

    // res.status(200).send(results);
  },

  create: async function (req: Request, res: Response) {
    const userData = req.body;
    const newUser = usersModel.create(userData);
    res.send(newUser);
    // SEND RESPONSE
   
      //***********VALIDATE INPUT LATER***********
      // if (!validateUsers(newUsers)) {
      //   res.status(400).send("Invalid input");
      // } else {
        // let results = await usersModel.create(newUser);
        // if (results.hasOwnProperty("createdId"))
        //   res.status(200).send(results);
        // else
        //   res.status(500).send("Something went wrong");
      },

      update: async function (req: Request, res: Response) {
        const id = req.params.id;
        const entry = req.body;
    
        // let result = await usersModel.update(id, entry);
    
        // res.status(200).send(result);
      },
    
}
export default usersController;