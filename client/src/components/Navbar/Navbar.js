import { AppBar, Avatar, Button, Toolbar } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import logo from "../../images/icon.png";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({type: 'LOGOUT'})
    history.push('/')
    setUser(null);
  }
  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location])
  return (
    <AppBar className={classes.appBar}>
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
            <Avatar
              className={classes.avatar}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <p className={classes.userName}>{user.result.name}</p>
            <Button className={classes.logout} onClick={logout}>Déconnexion</Button>
          </div>
        ) : (
          null
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
