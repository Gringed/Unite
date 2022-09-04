import { AppBar, Avatar, Button, Toolbar } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import logo from "../../images/icon.png";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import decode from "jwt-decode";
import { getUser } from "../../actions/user";
const Navbar = () => {
  const classes = useStyles();
  const userInfo = JSON.parse(localStorage.getItem("profile"));
  const {user} = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.go();
    localStorage.clear()
  };

  useEffect(() => {
    const token = userInfo?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
        window.alert("Vous avez été déconnecté, veuillez vous reconnecter");
        window.reload();
      }
    }
    dispatch(getUser(userInfo.result._id))
  }, [location, userInfo.token, dispatch]);
  return (
    <AppBar className={classes.appBar}>
      <div className={classes.appBarContainer}>
        <Link to="/">
          <div className={classes.brandContainer}>
            <img
              className={classes.image}
              src={logo}
              alt=""
              height="40"
              width="40"
            />
            <h1 className={classes.heading}>Unite</h1>
          </div>
        </Link>
        <Toolbar className={classes.toolbar}>
          {user ? (
            <div className={classes.profile}>
              <Link
                to={
                  "/profile/" +
                  (user._id ? user._id : user.result.googleId)
                }
              >
                <Avatar
                  className={classes.avatar}
                  alt={user.name}
                  src={user.imageUrl}
                >
                  {user.name.charAt(0)}
                </Avatar>
                <p className={classes.userName}>{user.name}</p>
              </Link>
              <Button className={classes.logout} onClick={logout}>
                Déconnexion
              </Button>
            </div>
          ) : null}
        </Toolbar>
      </div>
    </AppBar>
  );
};

export default Navbar;
