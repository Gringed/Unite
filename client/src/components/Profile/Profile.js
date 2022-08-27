import { CircularProgress, Container, Grid, Grow } from '@material-ui/core';
import React, { useEffect } from 'react'
import { RiArrowGoBackFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useParams } from 'react-router-dom';
import { getUser, getUsers } from '../../actions/user';
import Navbar from '../Navbar/Navbar';
import useStyles from "./styles";

const Profile = () => {
    const userInfo = JSON.parse(localStorage.getItem("profile"));
    const {user, users} = useSelector((state) => state.users);
    const classes = useStyles();
    const {id} = useParams();
    const dispatch = useDispatch();
    console.log(user)

    useEffect(() => {
      dispatch(getUser(id));
    }, [users]);
  return userInfo ? (
    <div>
      <Navbar />
      <Grow in>
        <Container className={classes.container} maxWidth={"lg"}>
          <Grid container justifyContent="space-between" spacing={3}>
            <Grid item xs={12} sm={7} md={8}>
              <Link to={"/dashboard"} className={classes.links}>
                <div className={classes.back}>
                  <RiArrowGoBackFill />
                  <h1>Retour</h1>
                </div>
              </Link>
              {user ? (
                <div>
                  
                </div>
              ) : (
                <CircularProgress style={{color: '#90be3e'}} />
              )}
            </Grid>
        </Grid>
        </Container>
    </Grow>
    </div>
  ) : (<Redirect to="/" />)
}

export default Profile
