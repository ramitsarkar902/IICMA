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

router.post("/create/:id", create);  // add verifytoken

router.get("/:id", getNews);

router.get("/all/news", getAllNews);

router.put("/:id", verifyToken, update);

router.post("/:id", deleteNews);  //add verifytoken

export default router;
