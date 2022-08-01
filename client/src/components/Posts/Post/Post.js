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
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import * as Icons from 'react-icons/ri'
const Post = ({ post, setCurrentId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdated, setIsUpdated] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const userData = useSelector((state) => state.userReducer);
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <><Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"}
        title={post._id} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "white" }} size="small" onClick={() => setCurrentId(post._id)}>
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>
      <CardContent>
        <Typography className={classes.title} variant="h5" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color='primary' onClick={() => dispatch(likePost(post._id))}>
          <ThumbUpAltIcon fontSize="medium" />
          Like
          {post.likeCount}
        </Button>
        <Button size="small" color='primary' onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="medium" />
          Supprimer
        </Button>
      </CardActions>
    </Card><li className={classes.cardContainer} key={post._id}>
        {!isLoading ? (
          <i className="fas fa-spinner fa-spin"></i>
        ) : (
          <>
            <div className={classes.cardLeft}>
              <img
                /* src={!isEmpty(usersData[0]) &&
                  usersData
                    .map((user) => {
                      if (user._id === post.creator)
                        return "./ReseauSocialV2" + user.picture;

                      else
                        return null;
                    })
                    .join("")} */
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png"
                alt="poster-pic" />
            </div>
            <div className="card-right">
              <div className="card-header">
                <div className="pseudo">
                  <h3>
                    {/* {!isEmpty(usersData[0]) &&
                      usersData
                        .map((user) => {
                          if (user._id === post.creator)
                            return user.firstName + ' ' + user.lastName;

                          else
                            return null;
                        })
                        .join("")} */}
                      Jean Clenche
                  </h3>
                  {/* {post.creator !== userData._id && (
                    <FollowHandler idToFollow={post.creator} type={"card"} />
                  )} */}
                </div>
                <span>{dateParse(post.createdAt)}</span>
                {/* {userData._id === post.creator && ( */}
                  <div className="button-container">
                    <div onClick={() => setIsUpdated(!isUpdated)}>
                      <Icons.RiEdit2Fill className="icon" />
                    </div>
                    <DeleteCard id={post._id} />
                  </div>
                {/* )} */}
              </div>
              <p>{post.message}</p>
              {post.picture && (
                <img src={"./ReseauSocialV2" + post.picture} alt="card-pic" className="card-pic" />
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
              <div className="card-footer">
                <div className="comment-icon">
                  <Icons.RiMessage3Fill
                    onClick={() => setShowComments(!showComments)} className="icon" />
                  <span>{/* {post.comments.length} */}0</span>
                </div>
                <LikeButton post={post} />
                <Icons.RiShareForwardFill className="icon" />
              </div>
              {showComments && <CardComments post={post} />}
            </div>
          </>
        )}
      </li></>
  );
};

export default Post;
