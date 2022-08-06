import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      default: "https://xsgames.co/randomusers/avatar.php?g=pixel",
    },
    bio: {
      type: String,
      max: 1024,
    },
    followers: {
      type: [String],
    },
    following: {
      type: [String],
    },
    likes: {
      type: [String],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    id: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
