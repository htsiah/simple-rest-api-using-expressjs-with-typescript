import express from "express";

import {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
} from "../controllers/UserController";

const router = express.Router();

router.get("/", getUsers);

router.get("/:id", getUserById);

router.post("/", createUser);

router.patch("/:id", updateUserById);

router.delete("/:id", deleteUserById);

export default router;
