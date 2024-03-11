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
      res.status(400).send("Bad request");
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
      res.status(400).send("Bad request");
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
      res.status(400).send("Bad request");
    }
  },

  delete: async function (req: Request, res: Response) {
    try {
      const id: number = parseInt(req.params.id);
      const deletedProject = await entriesModel.delete(id);
      res.status(200).send("Entry deleted");
    } catch (e) {
      console.log(e);
      res.status(400).send("Bad request");
    }
  },

  getByProjectId: async function (req: Request, res: Response) {
    try {
      const projectId: number = parseInt(req.params.projectId);
      const entries = await entriesModel.getByProjectId(projectId);
      res.status(200).send(entries);
    } catch (e) {
      console.log(e);
      res.status(400).send("Bad request");
    }
  },

  getByUserId: async function (req: Request, res: Response) {
    try {
      const userId: number = parseInt(req.params.userId);
      const entries = await entriesModel.getByUserId(userId);
      res.status(200).send(entries);
    } catch (e) {
      console.log(e);
      res.status(400).send("Bac request");
    }
  }
}

export default entriesController;