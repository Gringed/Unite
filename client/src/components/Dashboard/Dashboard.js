import React, { useEffect, useState } from "react";
import { Container, Grow, Grid, AppBar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { getPosts, getPostsBySearch } from "../../actions/posts";
import Navbar from "../Navbar/Navbar";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import useStyles from "./styles";

import { Redirect, useHistory, useLocation } from "react-router-dom";
import { getUser, getUsers } from "../../actions/user";
import Trends from "../Trends/Trends";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Dashboard = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem("profile"));
  const {user, users} = useSelector((state) => state.users);
  const query = useQuery();
  const history = useHistory();
  const [search, setSearch] = useState("");
  // const [tags, setTags] = useState([]);

  useEffect(() => {
    dispatch(getPosts());
    userInfo && dispatch(getUser(userInfo.result._id))
    dispatch(getUsers())
  }, [currentId, dispatch]);

  const searchPost = () => {
    if (search.trim()) {
      dispatch(getPostsBySearch({ search }));

      history.push(`/dashboard/search?searchQuery=${search || "none"}`);
    } else {
      history.push("/");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };
  /*  const handleAdd = (tag) => setTags([...tags, tag]);
  const handleDelete = (tagToDelete) =>
    setTags(tags.filter((tag) => tag !== tagToDelete)); */
  return userInfo ? (
    <>
      <Navbar />
      <Grow in>
        <Container className={classes.container} maxWidth={"lg"}>
          <Grid container justifyContent="space-between" spacing={3}>
            <Grid item xs={12} sm={7} md={8} className={classes.grid}>
              <AppBar
                position="static"
                color="inherit"
                className={classes.appBarSearch}
              >
                <input
                  name="search"
                  type="text"
                  placeholder="Rechercher . . ."
                  onKeyDownCapture={handleKeyPress}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <hr />
              </AppBar>
              <Posts
                user={user}
                users={users}
                currentId={currentId}
                setCurrentId={setCurrentId}
              />
            </Grid>
            <Grid item xs={12} sm={5} md={4}>
              {/* ICI REMPLACER FORM PAR LES TENDANCES */}
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

export default Dashboard;
