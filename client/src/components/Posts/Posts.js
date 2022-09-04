import React from "react";
import { Grid, LinearProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";
import useStyles from "./styles";

const Posts = ({ currentId, setCurrentId, user, users }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();


  if (!posts.length && !isLoading)
    return (
      <Grid>
        <h2 className={classes.empty}>
          Aucun résultat, veuillez rééssayer . .
        </h2>
      </Grid>
    );

  return (
    <>
      <NewPost currentId={currentId} user={user} setCurrentId={setCurrentId} />
      {isLoading ? (
        <LinearProgress className={classes.progressBar} />
      ) : (
        <Grid className={classes.container}>
          {posts?.map((post) => (
            <Grid key={post._id} item lg={12} md={12} sm={12}>
              <Post post={post} users={users} setCurrentId={setCurrentId} user={user} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Posts;
