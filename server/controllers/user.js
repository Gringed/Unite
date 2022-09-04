import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

import User from "../models/user.js";

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: "Utilisateur non existant" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Mot de passe incorrect" });

    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
      },
      "SECRET_KEY_HERE",
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Problème au niveau de la connexion" });
  }
};

export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Utilisateur déjà existant" });

    if (password !== confirmPassword)
      return res
        .status(400)
        .json({ message: "Les mots de passe ne sont pas identiques" });

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      email,
      password: hashedPassword,
      name: firstName + " " + lastName,
    });
    const token = jwt.sign(
      {
        email: result.email,
        id: result._id,
      },
      "SECRET_KEY_HERE",
      { expiresIn: "1h" }
    );
    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Problème au niveau de l'inscription" });
  }
};

export const getUser = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const user = await User.findById(_id);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {   
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const followUser = async (req, res) => {
  const { id } = req.params;
  const {following} = req.body

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("Aucun utilisateur trouvé");

  const follow = await User.findById(id);

  const index = follow.following.findIndex((id) => id === String(id));

  if (index === -1) {
    follow.following.push(following);
  } else {
    follow.following = follow.following.filter((id) => id !== String(id));
  }
  const updatedPost = await User.findByIdAndUpdate(id, follow, {
    new: true,
  });

  res.json(updatedPost);
};

export const updatedProfile = async (req, res) => {
  const { id: _id } = req.params;
  const user = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("Aucun utilisateur trouvé");

  const updatedUser = await User.findByIdAndUpdate(
    _id,
    { ...user, _id },
    { new: true }
  );

  res.json(updatedUser);
};
