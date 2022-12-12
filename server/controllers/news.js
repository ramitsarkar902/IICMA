import mongoose from "mongoose";
import { createError } from "../error.js";
import News from "../models/News.js";
import User from "../models/User.js";

export const create = async (req, res, next) => {
  const u = await User.findById(req.params.id);
  if (u.isAdmin) {
    try {
      const newNews = new News({ ...req.body, createdBy: u.username });
      await newNews.save();
      res.status(200).json(newNews);
    } catch (error) {
      next(error);
    }
  } else
    return next(
      createError(403, "Only Admin can create news and announcements!")
    );
};

export const deleteNews = async (req, res, next) => {
  const user = await User.findById(req.body.id);
  try {
    if (user.isAdmin) {
      await News.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted!");
    } else return next(createError(403, "Only Admin can delete a news!"));
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  const u = await User.findById(req.body.id);
  try {
    if (u.isAdmin) {
      const { id, ...others } = req.body;
      await News.findByIdAndUpdate(req.params.id, others);
      res.status(200).json("Updated successfully!");
    } else return next(createError(403, "Only Admin can update a news!"));
  } catch (error) {
    next(error);
  }
};

export const getNews = async (req, res, next) => {
  try {
    const n = await News.findById(req.params.id);
    res.status(200).json(n);
  } catch (error) {
    next(error);
  }
};

export const getAllNews = async (req, res, next) => {
  try {
    const n = await News.find({});
    res.status(200).json(n);
  } catch (error) {
    next(error);
  }
};
