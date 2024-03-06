import imagesModel from "../models/images.model";
import { Request, Response } from "express";

interface Image {
  url: string
}

const imagesController = {

  getById: async function (req: Request, res: Response) {
    try {
      const id: number = parseInt(req.params.id);
      const project = await imagesModel.getById(id);
      res.status(200).send(project);
    } catch (e) {
      console.log(e);
    }
  },

  create: async function (req: Request, res: Response) {
    try {
      const newImageToInsert: Image = req.body;
      const newProject = await imagesModel.create(newImageToInsert);
      res.status(200).send(newProject);
    } catch (e) {
      console.log(e);
    }
  }
}

export default imagesController;