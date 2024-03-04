import express from "express";
import usersController from "../controllers/users.controller";

const router = express.Router();

// USER ROUTES
router.get("/:id", usersController.getById);
router.patch("/:id", usersController.update);
router.post("/", usersController.create)

export default router;