import React, { useState } from "react";
import DeleteCard from "./DeleteCard";
import CardComments from "./CardComments";
import LikeButton from "./LikeButton";
import dayjs from "dayjs";
import timeParserFR from "dayjs/locale/fr";
import relativeTime from "dayjs/plugin/relativeTime";
import useStyles from "./styles";
import * as Icons from "react-icons/ri";
import { ButtonBase } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import FollowHandler from "../../Profile/FollowHandler";
const Post = ({ post, setCurrentId, user }) => {
  const [showComments, setShowComments] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  dayjs.extend(relativeTime);

  const openPost = () => history.push(`/dashboard/${post._id}`);
  const openProfil = () => history.push(`/profile/${post.creator}`);
  return (
    <>
      <li className={classes.cardContainer}>
        <div className={classes.cardLeft}>
          <ButtonBase onClick={openProfil}>
            <img
              src={
                post.avatar
                  ? post.avatar
                  : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              }
              alt="poster-pic"
            />
          </ButtonBase>
        </div>
        <div className={classes.cardRight}>
          <div className={classes.cardHeader}>
            <Link to={"/profile/" + post.creator}>
              <div className={classes.pseudo}>
                <h3>{post.name}</h3>
                 
              </div>
            </Link>
            {/* {post?.creator !== user?.result._id && (
                    post.creator.length < 24 ? null :
                    <FollowHandler idToFollow={post.creator} type={"card"} user={user} />
                  ) } */}
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
              <span>{post.comments.length}</span>
            </div>
            <LikeButton post={post} user={user} />
            <Icons.RiShareForwardFill className={classes.icon} />
          </div>
          {showComments && <CardComments post={post} user={user} />}
        </div>
      </li>
    </>
  );
};

export default Post;
