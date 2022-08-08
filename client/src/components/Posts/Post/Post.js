import React, { useState } from "react";
import { dateParse } from "../../Utils";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { deletePost, likePost } from "../../../actions/posts";
import DeleteCard from "./DeleteCard";
import CardComments from "./CardComments";
import LikeButton from "./LikeButton";
import dayjs from "dayjs";
import timeParserFR from "dayjs/locale/fr";
import relativeTime from "dayjs/plugin/relativeTime";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import * as Icons from "react-icons/ri";
const Post = ({ post, setCurrentId, user }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdated, setIsUpdated] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const userData = useSelector((state) => state.userReducer);
  const classes = useStyles();
  const dispatch = useDispatch();
  dayjs.extend(relativeTime);
  return (
    <>
      {/* <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={
            post.selectedFile ||
            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          }
          title={post._id}
        />
        <div className={classes.overlay}>
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant="body2">
            {dayjs(post.createdAt).locale(timeParserFR).fromNow()}
          </Typography>
        </div>
        <div className={classes.overlay2}>
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => setCurrentId(post._id)}
          >
            <MoreHorizIcon fontSize="medium" />
          </Button>
        </div>
        <CardContent>
          <Typography className={classes.title} variant="h5" gutterBottom>
            {post.message}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(likePost(post._id))}
          >
            <ThumbUpAltIcon fontSize="medium" />
            Like
            {post.likeCount}
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <DeleteIcon fontSize="medium" />
            Supprimer
          </Button>
        </CardActions>
      </Card> */}
      <li className={classes.cardContainer} key={post._id}>
        {!isLoading ? (
          <i className="fas fa-spinner fa-spin"></i>
        ) : (
          <>
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
                <span>
                  {dayjs(post.createdAt).locale(timeParserFR).fromNow()}
                </span>
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
          </>
        )}
      </li>
    </>
  );
};

export default Post;
