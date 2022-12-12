import { createError } from "../error.js";
import Product from "../models/Product.js";
import User from "../models/User.js";

export const create = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  try {
    if (user.isAdmin) {
      const newProduct = new Product({
        createdBy: user.name,
        dateOfRelease: new Date(),
        title: req.body.title,
        desc: req.body.desc,
        img: req.body.img,
      });
      await newProduct.save();
      res.status(200).json(newProduct);
    } else {
      return next(createError(403, "Only Admin can create a product!"));
    }
  } catch (err) {
    next(err);
  }
};

export const deleteProduct = async (req, res, next) => {
  const user = await User.findById(req.body.id);
  try {
    if (user.isAdmin) {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted!");
    } else return next(createError(403, "Only Admin can delete a product!"));
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  const u = await User.findById(req.body.id);
  try {
    if (u.isAdmin) {
      const { id, ...others } = req.body;
      await Product.findByIdAndUpdate(req.params.id, others);
      res.status(200).json("Updated successfully!");
    } else return next(createError(403, "Only Admin can update a product!"));
  } catch (error) {
    next(error);
  }
};

export const getAllProducts = async (req, res, next) => {
  try {
    const p = await Product.find({});
    res.status(200).json(p);
  } catch (error) {
    next(error);
  }
};

export const getProduct = async (req, res, next) => {
  try {
    const p = await Product.findById(req.params.id);
    res.status(200).json(p);
  } catch (error) {
    next(error);
  }
};
