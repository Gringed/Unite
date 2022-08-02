import { AppBar, Avatar, Button, Toolbar } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import logo from "../../images/icon.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const classes = useStyles();
  const user = null;
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
            <Button className={classes.logout}>Déconnexion</Button>
          </div>
        ) : (
          <Button variant="contained" component={Link} to={"/"}>
            Connexion
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
