import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { dateParse } from "../Utils";
import { NavLink } from "react-router-dom";
import { getPosts, getTrends } from "../../actions/posts";
import useStyles from "./styles";
import LikeButton from "../Posts/Post/LikeButton";

const Trends = () => {
  const { posts } = useSelector((state) => state.posts);
  const { user, users } = useSelector((state) => state.users);
  const trends = useSelector((state) => state.trends);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (posts[0]) {
      const postsArr = Object.keys(posts).map((i) => posts[i]);
      let sortedArray = postsArr.sort((a, b) => {
        return b.likes.length - a.likes.length;
      });
      sortedArray.length = 4;
      dispatch(getTrends(sortedArray));
      
    }
  }, [posts, dispatch]);

  return (
    <div className={classes.trendingContainer}>
      <h1>Tendances actuelles</h1>
      <ul>
        {trends.length &&
          trends.map((post) => {
            return (
              <li key={post._id}>
                <div>
                  {post.avatar && <img src={post.avatar} alt="post-pic" />}
                  {!post.avatar && (
                    <img
                      src={
                        users[0] &&
                        users
                          .map((user) => {
                            if (user._id === post.posterId) {
                              return user.avatar;
                            } else return null;
                          })
                          .join("")
                      }
                      alt="profil-pic"
                    />
                  )}
                </div>
                <div className={classes.trendContent}>
                  <div className={classes.trendMessage}>
                    {post.selectedFile && (
                      <img
                        src={post.selectedFile}
                        alt="card-pic"
                        className={classes.cardPic}
                      />
                    )}
                    {post.message}
                  </div>
                  <div className={classes.trendDetails}>
                  <LikeButton post={post} user={user} />
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Trends;
