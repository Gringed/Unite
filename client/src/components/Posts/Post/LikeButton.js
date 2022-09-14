import React, { useState } from "react";
/* import { UidContext } from "../AppContext"; */
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useDispatch } from "react-redux";
import { getPost, getPosts, getTrends, likePost } from "../../../actions/posts";
import * as Icons from "react-icons/ri";
import useStyles from "./styles";
import { useEffect } from "react";
const LikeButton = ({ post, user }) => {
  const [liked, setLiked] = useState(post?.likes);
  const classes = useStyles();
  const userInfo = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();

  const userId = userInfo?.result.googleId || user?._id;
  const hasLikedPost = post.likes.find((like) => like === userId);

  const handleLike = async () => {
    dispatch(likePost(post._id));
    if (hasLikedPost) {
      setLiked(post.likes.filter((id) => id !== userId));
    } else {
      setLiked([...post.likes, userId]);
    }
  };
  useEffect(() => {
    
  }, [])
  const Likes = () => {
    if (liked.length > 0) {
      return liked.find((like) => like === userId) ? (
        <>
          <Icons.RiHeartFill className={classes.filled} onClick={handleLike} />

          <span>
            {liked.length > 2
              ? `Vous et ${liked.length - 1} autres`
              : `${liked.length}`}
          </span>
        </>
      ) : (
        <>
          <Icons.RiHeartLine className={classes.icon} onClick={handleLike} />
          <span>{liked?.length ? liked?.length : 0}</span>
        </>
      );
    }

    return (
      <>
        <Icons.RiHeartLine className={classes.icon} onClick={handleLike} />
        <span>{liked?.length ? liked?.length : 0}</span>
      </>
    );
  };

  return (
    <div className={classes.likeIcon}>
      
      <Likes className={classes.icon} />
    </div>
  );
};

export default LikeButton;
