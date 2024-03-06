import projectsModel from "../models/projects.model";
import { Request, Response } from "express";

interface Project {
  title?: string | null;
  description?: string | null;
  img_id?: number | null;
  user_id: number;
  // updated_date: Date;
}

// interface ResponseBody { }

// interface RequestBody { }

const projectsController = {
  getById: async function (req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    const project = projectsModel.getById(id);
    res.status(200).send(project);
  },

  create: async function (req: Request, res: Response) {
    const newProjectToInsert = req.body;
    newProjectToInsert["updated_date"] = new Date();
    const newProject = projectsModel.create(newProjectToInsert);
    res.status(200).send(newProject);
  },

  update: async function () {
    // CODE PARSING REQUEST PARAMS AND BODY
    // MAYBE VALIDATION?
    // const updatedProject = projectsModel.update();
    // SEND RESPONSE
  },

  delete: async function () {
    // CODE PARSING REQUEST PARAMS
    // MAYBE VALIDATION?
    // projectsModel.delete();
    // SEND RESPONSE
  },

  getByUserId: async function () {
    // CODE PARSING REQUEST PARAMS
    // MAYBE VALIDATION?
    // const entries = projectsModel.getByUserId();
    // SEND RESPONSE
  }
}

export default projectsController;
