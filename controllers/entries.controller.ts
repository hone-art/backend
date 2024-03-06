import entriesModel from "../models/entries.model";
import { Request, Response } from "express";

// interface Entry {
//   description: string | null;
//   img_id: number | null;
//   user_id: number;
//   project_id: number;
//   // created_date: Date | null;
// }

const entriesController = {

  getById: async function (req: Request, res: Response) {
    try {
      const id: number = parseInt(req.params.id);
      const entry = await entriesModel.getById(id);
      res.status(200).send(entry);
    } catch (e) {
      console.log(e);
    }
  },

  create: async function (req: Request, res: Response) {
    try {
      const newEntryToInsert = req.body;
      newEntryToInsert["created_date"] = new Date();
      const newEntry = await entriesModel.create(newEntryToInsert);
      res.status(200).send(newEntry);
    } catch (e) {
      console.log(e);
    }
  },

  update: async function (req: Request, res: Response) {
    try {
      const id: number = parseInt(req.params.id);
      const dataToUpdate = req.body;
      const updatedEntry = await entriesModel.update(id, dataToUpdate);
      res.status(200).send(updatedEntry);
    } catch (e) {
      console.log(e);
    }
  },

  delete: async function (req: Request, res: Response) {
    try {
      const id: number = parseInt(req.params.id);
      const deletedProject = await entriesModel.delete(id);
      res.status(200).send("Entry deleted");
    } catch (e) {
      console.log(e);
    }
  },

  getByProjectId: async function (req: Request, res: Response) {
    try {
      const projectId: number = parseInt(req.params.projectId);
      const entries = await entriesModel.getByProjectId(projectId);
      res.status(200).send(entries);
    } catch (e) {
      console.log(e);
    }
  }
}

export default entriesController;