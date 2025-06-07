import mongoose from "mongoose";

const socialLinkSchema = new mongoose.Schema({
  platform: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
    },
    bio: {
      type: String,
    },
    userType: {
      type: String,
      enum: ["ADMIN", "GENERAL"],
      required: true,
    },
    socialLinks: [socialLinkSchema],
  },

  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
