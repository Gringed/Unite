import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";
import useStyles from "./styles";
const Posts = ({currentId, setCurrentId, user}) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  console.log(posts);
  return (
    <>
      <NewPost currentId={currentId} user={user} setCurrentId={setCurrentId}/>
      {!posts.length ? (
        <CircularProgress />
      ) : (
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {posts?.map((post) => ( 
            <Grid key={post._id} item  sm={6}>
              <Post post={post} setCurrentId={setCurrentId}/>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Posts;
