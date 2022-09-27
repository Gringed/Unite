import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getTrends } from "../../actions/posts";
import useStyles from "./styles";
import LikeTrends from "../Posts/Post/LikeTrends";
import { getUsers } from "../../actions/user";

const Trends = () => {
  const { posts, post } = useSelector((state) => state.posts);
  const { users } = useSelector((state) => state.users);
  const trends = useSelector((state) => state.trends);
  const userInfo = JSON.parse(localStorage.getItem("profile"));
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (posts[0]) {
      const postsArr = Object.keys(posts).map((i) => posts[i]);
      let sortedArray = postsArr.sort((a, b) => {
        return b.likes.length - a.likes.length;
      });
      sortedArray.length = 5;
      dispatch(getTrends(sortedArray));
    }
    dispatch(getUsers());
  }, [posts, post, dispatch]);

  return (
    <div className={classes.trendingContainer}>
      <h1>Tendances actuelles</h1>
      <ul>
        {trends.length &&
          trends.map((post) => {
            return (
              <li
                key={post._id}
                onClick={() => {
                  history.push(`/dashboard/${post._id}`);
                  window.location.reload();
                }}
              >
                <div>
                  {post.creator.length === 24 ? (
                    <img
                      src={
                        users &&
                        users[0]
                          ?.map((user) => {
                            if (user._id === post.creator) {
                              return user.imageUrl;
                            } else {
                              return null;
                            }
                          })
                          .join("")
                      }
                      alt="poster-pic"
                    />
                  ) : (
                    <img src={post.avatar} alt="" />
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
                    {post.message.split(" ").map((str) => {
                      if (str.startsWith("#")) {
                        return (
                          <span key={str} className={classes.hashtag}>
                            {str + " "}
                          </span>
                        );
                      }
                      return str + " ";
                    })}
                  </div>
                  <div className={classes.trendDetails}>
                    <LikeTrends post={post} user={userInfo.result} />
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
