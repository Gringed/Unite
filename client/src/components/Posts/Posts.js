import React, { useState } from "react";
import { Grid, LinearProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";
import useStyles from "./styles";
import { useEffect } from "react";
import { getPosts } from "../../actions/posts";

const Posts = ({ currentId, setCurrentId, user, users }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const [newPostsArray, setNewPostsArray] = useState();
  const [skip, setSkip] = useState(0)
  const [isEnd, setIsEnd] = useState(false)
  const classes = useStyles();
  const dispatch = useDispatch()
  

  const fetchMoreData = () => {
    try {
      dispatch(getPosts(skip))
      if (!posts.length) {
        setIsEnd(true)
      }
      setNewPostsArray(posts)
    } catch (error) {
      console.log(error.message)
    }
  }
  const loadMore = (e) => {
    console.log(document.documentElement.offsetHeight)
    console.log(e)
    if(document.scrollingElement.scrollTop + 1 >= document.scrollingElement.scrollHeight){
      setSkip(posts?.length)
    }
  }
  window.addEventListener('scroll', loadMore);
  useEffect(() => {
    fetchMoreData()
    
  }, [skip])

  if (!posts.length && !isLoading)
    return (
      <Grid>
        <h2 className={classes.empty}>
          Aucun post, soyez le premier !
        </h2>
      </Grid>
    );

  return (
    <>
      <NewPost currentId={currentId} user={user} setCurrentId={setCurrentId} />
      {isLoading ? (
        <LinearProgress className={classes.progressBar} />
      ) : (
        <div className={classes.container}>
          {posts?.map((post) => (
            <Grid key={post._id} item lg={12} md={12} sm={12}>
              <Post post={post} users={users} setCurrentId={setCurrentId} user={user} />
            </Grid>
          ))}
        </div>
      )}
    </>
  );
};

export default Posts;
