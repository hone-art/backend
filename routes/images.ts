import express from "express";
import imagesController from "../controllers/images.controller";

const router = express.Router();

// USER ROUTES
router.get("/:id", imagesController.getById);
router.post("/", imagesController.create)
router.delete("/:id", imagesController.delete);

export default router;