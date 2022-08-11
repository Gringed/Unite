import React, { useEffect } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";
import useStyles from "./styles";
import { useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
const Posts = ({ currentId, setCurrentId, user }) => {
  const posts = useSelector((state) => state.posts);
  const [count, setCount] = useState(5);

  const classes = useStyles();
  const fetchMoreData = () => {
    setTimeout(() => {
      setCount(count + 5);
    }, 1500);
  };
  return (
    <>
      <NewPost currentId={currentId} user={user} setCurrentId={setCurrentId} />
      {!posts.length ? (
        <CircularProgress />
      ) : (
        <Grid className={classes.container}>
          <InfiniteScroll
            dataLength={count}
            next={fetchMoreData}
            hasMore={true}
            // CHANGER LE LOADER
            loader={<h1>Loading...</h1>}
            className={classes.infinite}
          >
            {posts?.map((post) => (
              <Grid key={post._id} item lg={12} md={12} sm={12}>
                <Post post={post} setCurrentId={setCurrentId} user={user} />
              </Grid>
            ))}
          </InfiniteScroll>
        </Grid>
      )}
    </>
  );
};

export default Posts;
