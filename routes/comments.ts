import express from "express";
import commentsController from "../controllers/comments.controller";

const router = express.Router();

// COMMENTS ROUTES
router.get("/entries/:entryId", commentsController.getByEntryId);
router.post("/", commentsController.create);
router.delete("/:id", commentsController.delete);

export default router;