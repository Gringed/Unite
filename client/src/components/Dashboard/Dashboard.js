import React, { useEffect } from "react";
import { Container, AppBar, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import {getPosts} from '../../actions/posts'

import Form from "../../components/Form/Form";
import Posts from "../../components/Posts/Posts";
import useStyles from "./styles";
import logo from "../../images/icon.png";

const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar}>
        <img
          className={classes.image}
          src={logo}
          alt=""
          height="40"
          width="40"
        />
        <h1 className={classes.heading}>Unite</h1>
      </AppBar>
      <Grow in>
        <Container className={classes.container}>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default Dashboard;
