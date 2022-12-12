import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
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
    dateOfRelease: {
      type: Object,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
