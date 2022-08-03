import React, { useEffect, useState } from "react";
import { Container,Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import {getPosts} from '../../actions/posts'

import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import useStyles from "./styles";

import { Redirect } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Dashboard = () => {
  const [currentId, setCurrentId] = useState(null)
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'))
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch])

  return (
    // ID A CHANGER UNE FOIS L'AUTH FAITE
    user ? 
    <Container maxWidth="lg">
      <Navbar />
      <Grow in>
        <Container className={classes.container}>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts user={user} currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
    : <Redirect to='/' />
  );
};

export default Dashboard;
