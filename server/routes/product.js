import express from "express";
import {
  create,
  deleteProduct,
  getAllProducts,
  getProduct,
  update,
} from "../controllers/product.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.post("/create/:id", verifyToken, create);

router.get("/:id", getProduct);

router.get("/all/products", getAllProducts);

router.delete("/:id", deleteProduct);

router.put("/:id", verifyToken, update);

export default router;
