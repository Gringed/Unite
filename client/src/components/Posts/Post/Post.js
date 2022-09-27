import React, { useState } from "react";
import DeleteCard from "./DeleteCard";
import CardComments from "./CardComments";
import dayjs from "dayjs";
import timeParserFR from "dayjs/locale/fr";
import relativeTime from "dayjs/plugin/relativeTime";
import useStyles from "./styles";
import * as Icons from "react-icons/ri";
import { ButtonBase } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { likePost } from "../../../actions/posts";
import Fancybox from "../../FancyBox";

const Post = ({ post, user, users }) => {
  const [showComments, setShowComments] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("profile"));
  const [likes, setLikes] = useState(post?.likes);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  dayjs.extend(relativeTime);
  const userId = userInfo?.result.googleId || userInfo?.result._id;
  const hasLikedPost = post.likes.find((like) => like === userId);

  const handleLike = async () => {
    dispatch(likePost(post._id));

    if (hasLikedPost) {
      setLikes(post.likes.filter((id) => id !== userId));
    } else {
      setLikes([...post.likes, userId]);
    }
  };

  const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === userId) ? (
        <>
          <Icons.RiHeartFill className={classes.filled} onClick={handleLike} />

          <span>
            {likes.length > 2
              ? `Vous et ${likes.length - 1} autres`
              : `${likes.length}`}
          </span>
        </>
      ) : (
        <>
          <Icons.RiHeartLine className={classes.icon} onClick={handleLike} />
          <span>{likes?.length ? likes?.length : 0}</span>
        </>
      );
    }

    return (
      <>
        <Icons.RiHeartLine className={classes.icon} onClick={handleLike}/>
        <span>{likes?.length ? likes?.length : 0}</span>
      </>
    );
  };

  // URL A CHANGER POUR LA PRODUCTION 
  const url = new URL(`http://localhost:3000/dashboard/${post._id}`);
  const openPost = () => history.push(`/dashboard/${post._id}`);
  const openProfil = () => history.push(`/profile/${post.creator}`);
  return (
    <>
      <li className={classes.cardContainer}>
        <div className={classes.cardLeft}>
          <ButtonBase onClick={openProfil}>
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
              {url == document.location.href
                ? post.selectedFile && (
                    <Fancybox>
                      <a href={post.selectedFile} data-fancybox="gallery">
                        <img
                          className={classes.cardPic}
                          src={
                            post.selectedFile ||
                            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                          }
                          alt={post.title}
                        />
                      </a>
                    </Fancybox>
                  )
                : post.selectedFile && (
                    <img
                      className={classes.cardPic}
                      src={
                        post.selectedFile ||
                        "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                      }
                      alt={post.title}
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
              {(post?.creator === user?._id ||
              post?.creator === userInfo?.result.googleId ||
              user?.isAdmin) && (
              <div className={classes.buttonContainer}>
                <DeleteCard id={post._id} />
              </div>
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
            <div className={classes.likeIcon}>
              <Likes className={classes.icon} />
            </div>
            <Icons.RiShareForwardFill className={classes.icon} />
          </div>
          {showComments && (
            <CardComments post={post} users={users} user={user} />
          )}
        </div>
      </li>
    </>
  );
};

export default Post;
