import { createRequire } from "module";
import mongoose from "mongoose";
import { createError } from "../error.js";
import Event from "../models/Event.js";
import User from "../models/User.js";
const require = createRequire(import.meta.url);
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
//email config
/* var nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  auth: {
    user: "uwu90269@gmail.com",
    pass: "process.env.emailPw",
  },
  secure: true,
}); */

export const create = async (req, res, next) => {
  const u = await User.findById(req.params.id);
  if (u.isAdmin) {
    const newEvent = new Event({ ...req.body, createdBy: u.username });
    await newEvent.save();
    res.status(200).json(newEvent);
  } else return next(createError(403, "Only Admin can create an event!"));
};

export const deleteEvent = async (req, res, next) => {
  const u = await User.findById(req.body.id);

  try {
    if (u.isAdmin) {
      await Event.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } else return next(createError(403, "Only Admin can delete an event!"));
  } catch (error) {
    return next(error);
  }
};

export const update = async (req, res, next) => {
  const u = await User.findById(req.body.id);

  try {
    if (u.isAdmin) {
      const { id, ...others } = req.body;
      await Event.findByIdAndUpdate(req.params.id, others);
      res.status(200).json("Updated successfully!");
    } else return next(createError(403, "Only Admin can update an event!"));
  } catch (error) {
    next(error);
  }
};

//not handling duplicate sponsors if amount is changed
export const addSponsor = async (req, res, next) => {
  /* const amount = req.body.amount;
  const sid = req.body.id;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "INR",
      description: "Test company",
      payment_method: sid,
      confirm: true,
    });
    console.log("Payment", payment);
    res.json({
      message: "Payment successful",
      success: true,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment failed",
      success: false,
    });
  } */
  try {
    const event = await Event.findById(req.params.id);
    var amount = event.donation + parseInt(req.body.amount);
    await Event.findByIdAndUpdate(req.params.id, {
      $addToSet: { sponsors: req.body },
      $set: { donation: amount },
    });

    res.status(200).json("Added!");
  } catch (error) {
    next(error);
  }
};

export const addParticipant = async (req, res, next) => {
  try {
    await Event.findByIdAndUpdate(req.params.id, {
      $addToSet: { participants: req.body },
    });

    /* const mailData = {
      from: "ramitsarkar902@gmail.com", // sender address
      to: "ramitsarkar902@gmail.com", // list of receivers
      subject: "Sending Email using Node.js",
      text: "That was easy!",
      html: "<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>",
    };

    transporter.sendMail(mailData, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    }); */

    res.status(200).json("Added!");
  } catch (error) {
    next(error);
  }
};

export const getAllEvents = async (req, res, next) => {
  try {
    const event = await Event.find({});
    res.status(200).json(event);
  } catch (error) {
    next(error);
  }
};

export const getEvent = async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.id);
    res.status(200).json(event);
  } catch (error) {
    next(error);
  }
};
