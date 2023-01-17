import bcrypt from "bcryptjs";
import { createError } from "../error.js";
import User from "../models/User.js";

export const update = async (req, res, next) => {
  const u = await User.findById(req.params.id);
  if (u.username === req.body.username) {
    try {
      if (req.body.password) {
        const { password, ...others } = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: { password: hash, others },
          },
          { new: true }
        );
        res.status(200).json("Updated!");
      } else {
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        const { password, ...others } = updatedUser._doc;
        res.status(200).json(others);
      }
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You can update only your account!"));
  }
};

//need changes in delete method

export const deleteUser = async (req, res, next) => {
  const u = await User.findById(req.params.id);
  if (u.isAdmin === true) {
    try {
      const user = await User.findOne({ username: req.body.username });
      await user.delete();
      res.status(200).json("Deleted Successfully!");
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You can only delete your account!"));
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    next(err);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await User.find({});
    res.status(200).json(allUsers);
  } catch (err) {
    next(err);
  }
};

export const member = async (req, res, next) => {
  const u = await User.findById(req.params.id);
  if (u.isAdmin) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync("welcome", salt);
    const newUser = new User({ ...req.body, password: hash, type: "member" });

    await newUser.save();
    res.status(200).send("New Member has been created!");
  } else return next(createError(403, "Only Admin can add members!"));
};

export const getMembers = async (req, res, next) => {
  try {
    const u = await User.find({ type: "member" });
    res.status(200).json(u);
  } catch (error) {
    next(error);
  }
};
