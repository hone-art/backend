import projectsModel from "../models/projects.model";
import { Request, Response } from "express";

// interface Project {
//   title?: string | null;
//   description?: string | null;
//   img_id?: number | null;
//   user_id: number;
// }

const projectsController = {
  getById: async function (req: Request, res: Response) {
    try {
      const id: number = parseInt(req.params.id);
      const project = await projectsModel.getById(id);
      res.status(200).send(project);
    } catch (e) {
      console.log(e);
      res.status(400).send("Bad request");
    }
  },

  create: async function (req: Request, res: Response) {
    try {
      const newProjectToInsert = req.body;
      newProjectToInsert["updated_date"] = new Date();
      const newProject = await projectsModel.create(newProjectToInsert);
      res.status(200).send(newProject);
    } catch (e) {
      console.log(e);
      res.status(400).send("Bad request");
    }
  },

  update: async function (req: Request, res: Response) {
    try {
      const id: number = parseInt(req.params.id);
      const dataToUpdate = req.body;
      dataToUpdate["updated_date"] = new Date();
      const updatedProject = await projectsModel.update(id, dataToUpdate);
      res.status(200).send(updatedProject);
    } catch (e) {
      console.log(e);
      res.status(400).send("Bad request");
    }
  },

  delete: async function (req: Request, res: Response) {
    try {
      const id: number = parseInt(req.params.id);
      const deletedProject = await projectsModel.delete(id);
      res.status(200).send("Project deleted");
    } catch (e) {
      console.log(e);
      res.status(400).send("Bad request");
    }
  },

  getByUserId: async function (req: Request, res: Response) {
    try {
      const userId: number = parseInt(req.params.userId);
      const projects = await projectsModel.getByUserId(userId);
      res.status(200).send(projects);
    } catch (e) {
      console.log(e);
      res.status(400).send("Bad request");
    }
  }
}

export default projectsController;
