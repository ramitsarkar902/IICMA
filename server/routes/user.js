import express from "express";
import {
  deleteUser,
  getUser,
  member,
  update,
  getAllUsers
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.put("/:id", verifyToken, update);

router.delete("/:id", verifyToken, deleteUser);

router.get("/:id", getUser);

router.get("/all/users", getAllUsers);

router.post("/add/:id", verifyToken, member);


export default router;
