import mongoose from "mongoose";
import PostMessage from "../models/postMsg.js";

export const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await PostMessage.findById(id);

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find().sort({ _id: -1 });

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPostsBySearch = async (req, res) => {
  const { searchQuery } = req.query;
  try {
    const message = new RegExp(searchQuery, "i");
    const posts = await PostMessage.find({
      $or: [{ message }],
    }).sort({ _id: -1 });
    res.json({ data: posts });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage({
    ...post,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("Aucun post trouvé");

  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    { new: true }
  );

  res.json(updatedPost);
};

export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) return res.json({ message: "Non identifié" });

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("Aucun post trouvé");

  const post = await PostMessage.findById(id);

  const index = post.likes.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    post.likes.push(req.userId);
  } else {
    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }
  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {
    new: true,
  });

  res.json(updatedPost);
};

export const addComment = async (req, res) => {
  const { id } = req.params;
  const { commenterId, commenterName, comment, commenterImg } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("Aucun post trouvé");
  const post = await PostMessage.findById(id);

  post.comments.push({
    commenterId,
    commenterName,
    commenterImg,
    comment,
    timestamp: new Date().getTime(),
  });

  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {
    new: true,
  });
  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("Aucun post trouvé");

  await PostMessage.findByIdAndRemove(id);

  res.json({ message: "Post supprimé avec succès" });
};
