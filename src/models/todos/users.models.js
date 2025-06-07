import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: ["true", "password is required"],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("Users", userSchema);
