import express from "express";
import projectsController from "../controllers/projects.controller";

const router = express.Router();

// PROJECT ROUTES
router.get("/:id", projectsController.getById); // Get project by id
router.post("/", projectsController.create); // Create new project
router.patch("/:id", projectsController.update); // Update project
router.delete("/:id", projectsController.delete); // Delete project and related entries
router.get("/users/:userId", projectsController.getByUserId); // Get project by user id
router.get("/users/:userId/isPublic", projectsController.getByUserId); // Get project by user id

export default router;