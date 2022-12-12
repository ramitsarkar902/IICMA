import express from "express";
import {
  create,
  deleteNews,
  getAllNews,
  getNews,
  update,
} from "../controllers/news.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.post("/create/:id", verifyToken, create);

router.get("/:id", getNews);

router.get("/all/news", getAllNews);

router.put("/:id", verifyToken, update);

router.delete("/:id", verifyToken, deleteNews);

export default router;
