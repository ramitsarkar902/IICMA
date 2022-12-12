import express from "express";
import { create, del, geta, getAll } from "../controllers/contactus.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.post("/create/", create);

router.get("/:id", geta);

router.post("/all", getAll);

router.delete("/:id", del);

export default router;
