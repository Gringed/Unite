import React, { useState } from "react";
import DeleteCard from "./DeleteCard";
import CardComments from "./CardComments";
import LikeButton from "./LikeButton";
import dayjs from "dayjs";
import timeParserFR from "dayjs/locale/fr";
import relativeTime from "dayjs/plugin/relativeTime";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import * as Icons from "react-icons/ri";
import { ButtonBase } from "@material-ui/core";
import { useHistory } from "react-router-dom";
const Post = ({ post, setCurrentId, user }) => {
  const [showComments, setShowComments] = useState(false);
  const userData = useSelector((state) => state.userReducer);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  dayjs.extend(relativeTime);

  const openPost = () => history.push(`/dashboard/${post._id}`);
  return (
    <>
      <li className={classes.cardContainer}>
        <div className={classes.cardLeft}>
          <img
            src={
              post.avatar
                ? post.avatar
                : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            }
            alt="poster-pic"
          />
        </div>
        <div className={classes.cardRight}>
          <div className={classes.cardHeader}>
            <div className={classes.pseudo}>
              <h3>{post.name}</h3>
              {/* {post.creator !== userData._id && (
                    <FollowHandler idToFollow={post.creator} type={"card"} />
                  )} */}
            </div>
            <span>{dayjs(post.createdAt).locale(timeParserFR).fromNow()}</span>
            {(post?.creator === user?.result._id ||
              post?.creator === user?.result.googleId ||
              user?.result.isAdmin) && (
              <div className={classes.buttonContainer}>
                <div onClick={() => setCurrentId(post._id)}>
                  <Icons.RiEdit2Fill className="icon" />
                </div>
                <DeleteCard id={post._id} />
              </div>
            )}
          </div>
          <ButtonBase className={classes.cardAction} onClick={openPost}>
            <div className={classes.contenu}>
              <p>
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
              </p>
              {post.selectedFile && (
                <img
                  src={post.selectedFile}
                  alt="card-pic"
                  className={classes.cardPic}
                />
              )}
              {post.video && (
                <iframe
                  width="500"
                  height="300"
                  src={post.video}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={post._id}
                ></iframe>
              )}
            </div>
          </ButtonBase>
          <div className={classes.footer}>
            <div className={classes.commentIcon}>
              <Icons.RiMessage3Fill
                onClick={() => setShowComments(!showComments)}
                className={classes.icon}
              />
              <span>{/* {post.comments.length} */}0</span>
            </div>
            <LikeButton post={post} user={user} />
            <Icons.RiShareForwardFill className={classes.icon} />
          </div>
          {showComments && <CardComments post={post} />}
        </div>
      </li>
    </>
  );
};

export default Post;
