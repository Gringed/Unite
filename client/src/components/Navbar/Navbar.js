import { AppBar, Avatar, Button, ButtonBase, Toolbar } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import logo from "../../images/icon.png";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import decode from "jwt-decode";
import { getUsers } from "../../actions/user";
const Navbar = () => {
  const classes = useStyles();
  const userInfo = JSON.parse(localStorage.getItem("profile"));
  const {users} = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.go();
    localStorage.clear()
  };
  const openProfil = () => {
    history.push(`/profile/${userInfo?.result._id}`) 
    window.location.reload()
  }

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
    dispatch(getUsers())
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
          {userInfo ? (
            <div className={classes.profile}>
              <ButtonBase onClick={openProfil}>
                <Avatar
                  className={classes.avatar}
                  src={users &&
                    users[0]
                      ?.map((user) => {
                        if (user._id === userInfo?.result._id) {
                          return user.imageUrl;
                        } else {
                          return null;
                        }
                      })
                      .join("")
                  }
                >
                  {userInfo?.result.name.charAt(0)}
                </Avatar>
                <p className={classes.userName}>{userInfo?.result.name}</p>
              </ButtonBase>
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
