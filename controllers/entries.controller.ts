import entriesModel from "../models/entries.model";
import { Request, Response } from "express";
import { generateOneMonthContributions } from '../utils/generateOneMonthContributions'
import { getDaysInMonth } from '../utils/getDaysInMonth'
import { generateAllDayArray } from '../utils/generateAllDayArray'

type Entry = {
  id: number;
  description: string | null;
  img_id: number | null;
  project_id: number;
  user_id: number;
  created_date: Date;
}

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
      res.status(400).send("Bad request");
    }
  },

  getByUserIdAndDate: async function (req: Request, res: Response) {
    try {
      const userId: number = parseInt(req.params.userId);
      const dateStr: string = req.params.date;
      const entries = await entriesModel.getByUserIdAndDate(userId, dateStr);
      res.status(200).send(entries);
    } catch (e) {
      console.log(e);
      res.status(400).send("Bad request");
    }
  },

  getByUserIdAndMonth: async function (req: Request, res: Response) {
    try {
      const userId: number = parseInt(req.params.userId);
      const monthStr: string = req.params.month;
      const numberOfDays: number = getDaysInMonth(monthStr);

      const entries: Entry[] = await entriesModel.getByUserIdAndMonth(userId, monthStr);
      const oneMonthContributions = generateOneMonthContributions(numberOfDays, entries);
      res.status(200).send(oneMonthContributions);
    } catch (e) {
      console.log(e);
      res.status(400).send("Bad request");
    }
  },

  getCurrentStreakByUserId: async function(req: Request, res: Response) {
    try {
      const userId: number = parseInt(req.params.userId);
      const date: Date = new Date(req.params.date);
      const entries: Entry[] = await entriesModel.getByUserId(userId);
      generateAllDayArray(entries, date);
      const newDate = new Date('2024-03-15T02:29:19.290Z')
      console.log("date========", date);
      console.log("newDate=======", newDate);
      console.log(date < newDate);
      res.status(200).send(entries);
    } catch (e){
      console.log(e);
      res.status(400).send('Bad request');
    }
  }
}

export default entriesController;