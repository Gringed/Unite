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
      unique: true
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
      max: 150,
    },
    birthday: {
      type: Date,
      trim: true,
    },
    followers: {
      type: [String],
      default: []
    },
    following: {
      type: [String],
      default: []
    },
    likes: {
      type: [String],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
