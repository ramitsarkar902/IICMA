import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    img: {
      type: String,
    },
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
    createdBy: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("News", newsSchema);
