import express from "express";
import {
  addParticipant,
  addSponsor,
  create,
  deleteEvent,
  getAllEvents,
  getEvent,
  update,
} from "../controllers/event.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.post("/create/:id", verifyToken, create);

router.get("/:id", getEvent);

router.get("/all/events", getAllEvents);

router.put("/:id", verifyToken, update);

router.post("/addsponsor/:id", addSponsor);

router.post("/addparticipant/:id", addParticipant);

router.delete("/:id", verifyToken, deleteEvent);

export default router;
