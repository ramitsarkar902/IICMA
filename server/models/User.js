import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    img: {
      type: String,
      default:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
    },
    email: {
      type: String,
      unique: true,
    },
    address: {
      type: String,
    },
    phoneNo: {
      type: Number,
    },
    password: {
      type: String,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "",
    },
    sponsorshipAmount: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
