import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import contactRoutes from "./routes/contactus.js";
import eventRoutes from "./routes/event.js";
import newsRoutes from "./routes/news.js";
import productRoutes from "./routes/product.js";
import userRoutes from "./routes/user.js";

dotenv.config();
const app = express();

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      throw err;
    });
};

app.use(cors());
app.use(express.json());
app.use(cookieParser());

//custom error handling
app.use((err, req, res, next) => {
  let status = err.status || 500;
  let message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message: message,
  });
});

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/event", eventRoutes);
app.use("/api/product", productRoutes);
app.use("/api/contact", contactRoutes);

app.listen(process.env.port || 9000, () => {
  console.log("Server started");
  connect();
});
