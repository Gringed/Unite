import React, { useState } from "react";
/* import { UidContext } from "../AppContext"; */
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useDispatch } from "react-redux";
import { likePost } from "../../../actions/posts";
import * as Icons from "react-icons/ri";
import useStyles from "./styles";
const LikeButton = ({ post, user }) => {
  const [liked, setLiked] = useState(post?.likes);
  const classes = useStyles();

  const dispatch = useDispatch();

  const userId = user?.result.googleId || user?.result?._id;
  const hasLikedPost = post.likes.find((like) => like === userId);

  const handleLike = async () => {
    dispatch(likePost(post._id));

    if (hasLikedPost) {
      setLiked(post.likes.filter((id) => id !== userId));
    } else {
      setLiked([...post.likes, userId]);
    }
  };

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
