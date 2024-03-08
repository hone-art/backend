import express from "express";
import usersController from "../controllers/users.controller";

const router = express.Router();

// USER ROUTES
router.get("/:uuid", usersController.getByUuid);
router.patch("/:id", usersController.update);
router.post("/", usersController.create);
router.post("/username", usersController.getByUsername)

export default router;