import { createError } from "../error.js";
import ContactUs from "../models/ContactUs.js";

export const create = async (req, res, next) => {
  try {
    const c = await ContactUs.create(req.body);
    await c.save();
    res.status(200).json(c);
  } catch (error) {
    next(error);
  }
};

export const getAll = async (req, res, next) => {
  try {
    const c = await ContactUs.find({});
    res.status(200).json(c);
  } catch (error) {
    next(error);
  }
};

export const geta = async (req, res, next) => {
  try {
    const c = await ContactUs.findById(req.params.id);
    res.status(200).json(c);
  } catch (error) {
    next(error);
  }
};

export const del = async (req, res, next) => {
  try {
    await ContactUs.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted!");
  } catch (error) {
    next(eror);
  }
};
