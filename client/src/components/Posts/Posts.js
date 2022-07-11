import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
const Posts = () => {
    const classes = useStyles();
  return (
    <>
      <h1>All posts</h1>
      <Post />
    </>
  );
};

export default Posts;
