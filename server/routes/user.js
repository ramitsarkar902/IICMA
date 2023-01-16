import express from "express";
import {
  deleteUser,
  getAllUsers,
  getMembers,
  getUser,
  member,
  update,
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.put("/:id", verifyToken, update);

router.post("/:id", deleteUser); //add verifytoken

router.get("/:id", getUser);

router.get("/all/users", getAllUsers);

router.get("/all/members", getMembers);

router.post("/add/:id", member); //add verifytoken

export default router;
