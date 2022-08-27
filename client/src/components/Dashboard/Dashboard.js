import React, { useEffect, useState } from "react";
import { Container, Grow, Grid, AppBar } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts, getPostsBySearch } from "../../actions/posts";
import Navbar from "../Navbar/Navbar";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import useStyles from "./styles";

import { Redirect, useHistory, useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Dashboard = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const query = useQuery();
  const history = useHistory();
  const [search, setSearch] = useState("");
  // const [tags, setTags] = useState([]);

  useEffect(() => {
    dispatch(getPosts());
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
  return user ? (
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
                currentId={currentId}
                setCurrentId={setCurrentId}
              />
            </Grid>
            <Grid item xs={12} sm={5} md={4}>
              {/* ICI REMPLACER FORM PAR LES TENDANCES */}
              <Form />
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
