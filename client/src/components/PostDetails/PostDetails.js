import { Container, Grid, Grow, LinearProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import useStyles from "./styles";
import { getPosts } from "../../actions/posts";
import { RiArrowGoBackFill } from "react-icons/ri"
import { getUser, getUsers } from "../../actions/user";
import Trends from "../Trends/Trends";
import Post from "../Posts/Post/Post";

const PostDetails = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const { user, users } = useSelector((state) => state.users);
  const classes = useStyles();
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem("profile"));
  const { id } = useParams();
  const post = posts.find((post) => post._id === id);
  useEffect(() => {
    dispatch(getPosts());
    userInfo && dispatch(getUser(userInfo.result._id));
    dispatch(getUsers());
  }, [dispatch]);

  return userInfo ? (
    <>
      <Navbar />
      <Grow in>
        <Container className={classes.container} maxWidth={"lg"}>
          <Grid container justifyContent="space-between" spacing={3}>
            <Grid item xs={12} sm={7} md={8} className={classes.grid}>
            <Link to={"/dashboard"} className={classes.linkBack}>
                <div className={classes.back}>
                  <RiArrowGoBackFill />
                  <h1>Retour</h1>
                </div>
              </Link>
              {isLoading ? (
                <LinearProgress className={classes.progressBar} />
              ) : (
                post ? 
                <Grid >
                  <Grid key={post._id} item lg={12} md={12} sm={12}>
                    <Post post={post} users={users} user={user} />
                  </Grid>
                </Grid>
                : 
                <div>
                  <h1>Aucun post trouvé</h1>
                </div>
              )}
            </Grid>
            <Grid item xs={12} sm={5} md={4}>
              <Trends />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </>
  ) : (
    <>
      <Redirect to="/" />
    </>
  );

  
};

export default PostDetails;
