import commentsModel from "../models/comments.model"
import { Request, Response } from "express";

type Comment = {
  description: string;
  user_id: number;
  entry_id: number;
}

const commentsController = {

  create: async function (req: Request, res: Response) {
    try {
      const newCommentToInsert = req.body;
      const newComment = await commentsModel.create(newCommentToInsert);
      res.status(200).send(newComment);
    } catch (e) {
      console.log(e);
      res.status(400).send("Bad request");
    }
  },

  delete: async function (req: Request, res: Response) {
    try {
      const id: number = parseInt(req.params.id);
      const deletedComment = await commentsModel.delete(id);
      res.status(200).send("Comment deleted");
    } catch (e) {
      console.log(e);
      res.status(400).send("Bad request");
    }
  },

  getByEntryId: async function (req: Request, res: Response) {
    try {
      const entryId: number = parseInt(req.params.entryId);
      const comments = await commentsModel.getByEntryId(entryId);
      res.status(200).send(comments);
    } catch (e) {
      console.log(e);
      res.status(400).send("Bad request");
    }
  },
}

export default commentsController;