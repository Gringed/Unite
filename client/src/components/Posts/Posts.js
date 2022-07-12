import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";
import useStyles from "./styles";
const Posts = () => {
  const posts = useSelector((state) => state.posts)
    const classes = useStyles();
    console.log(posts)
  return (
    <>
      <NewPost />
      <Post />
    </>
  );
};

export default Posts;
