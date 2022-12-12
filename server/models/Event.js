import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    createdBy: {
      type: String,
    },
    sponsors: {
      type: Array,
    },
    donation: {
      type: Number,
      default: 0,
    },
    participants: {
      type: Array,
      default: [],
    },
    organizingDate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);
