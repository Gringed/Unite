import { AppBar, Avatar, Button, Toolbar } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import logo from "../../images/icon.png";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.go();
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
    
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()){
        logout();
      } ;
    }

  }, [location]);
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
            <Link to="/profile">
              <Avatar
                className={classes.avatar}
                alt={user.result.name}
                src={user.result.imageUrl}
              >
                {user.result.name.charAt(0)}
              </Avatar>
              <p className={classes.userName}>{user.result.name}</p>
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
