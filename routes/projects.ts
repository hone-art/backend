import express from "express";
import projectsController from "../controllers/projects.controller";

const router = express.Router();

// PROJECT ROUTES
router.get("/:id", projectsController.getById);
router.post("/", projectsController.create);
router.patch("/:id", projectsController.update);
router.delete("/:id", projectsController.delete);
router.get("/users/:userId", projectsController.getByUserId);

export default router;