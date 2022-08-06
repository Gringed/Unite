import React, { useEffect } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";
import useStyles from "./styles";
import { useState } from "react";
import { getPosts } from "../../actions/posts";
const Posts = ({ currentId, setCurrentId, user }) => {
  const posts = useSelector((state) => state.posts);
  const [loadPosts, setLoadPosts] = useState(true);
  const [count, setCount] = useState(5)
  const dispatch = useDispatch();
  const classes = useStyles();
  const loadMore = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.scrollingElement.scrollHeight
    ) {
      setLoadPosts(true);
    }
  };
  useEffect(() => {
    if(loadPosts){
        dispatch(getPosts(count));
        
        setLoadPosts(false);
        setCount(count + 5);
    }
    window.addEventListener('scroll', loadMore);
    return () => window.removeEventListener('sroll', loadMore);
}, [loadPosts, dispatch, count])
  return (
    <>
      <NewPost currentId={currentId} user={user} setCurrentId={setCurrentId} />
      {!posts.length ? (
        <CircularProgress />
      ) : (
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {posts?.map((post) => (
            <Grid key={post._id} item sm={12}>
              <Post post={post} setCurrentId={setCurrentId} user={user} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Posts;
