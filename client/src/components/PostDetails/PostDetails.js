import { CircularProgress, Container, Grid, Grow } from "@material-ui/core";
import Fancybox from "../FancyBox";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import useStyles from "./styles";
import { getPost, likePost } from "../../actions/posts";
import Form from "../Form/Form";
import { dateParse } from "../Utils";
import DeleteCard from "../Posts/Post/DeleteCard";
import { RiArrowGoBackFill } from "react-icons/ri";
import LikeButton from "../Posts/Post/LikeButton";
import CardComments from "../Posts/Post/CardComments";
import * as Icons from "react-icons/ri";

const PostDetails = () => {
  const [showComments, setShowComments] = useState(false);
  const user = JSON.parse(localStorage.getItem("profile"));
  const { post, posts } = useSelector((state) => state.posts);
  const [liked, setLiked] = useState(post?.likes);
  const dispatch = useDispatch();
  const classes = useStyles();
  const { id } = useParams();
  const userId = user?.result.googleId || user?.result?._id;
  const hasLikedPost = post?.likes.includes((like) => like === userId);
  const handleLike = async () => {
    dispatch(likePost(post._id));

    if (hasLikedPost) {
      setLiked(post.likes.filter((id) => id !== userId));
    } else {
      setLiked([...post.likes, userId]);
    }
  };

  useEffect(() => {
    dispatch(getPost(id));
  }, [posts]);
  return user ? (
    <>
      <Navbar />
      <Grow in>
        <Container className={classes.container} maxWidth={"lg"}>
          <Grid container justifyContent="space-between" spacing={3}>
            <Grid item xs={12} sm={7} md={8}>
              <Link to={"/dashboard"} className={classes.linkBack}>
                <div className={classes.back}>
                  <RiArrowGoBackFill />
                  <h1>Retour</h1>
                </div>
              </Link>
              {post ? (
                <div className={classes.cardContainer}>
                  <div className={classes.cardHeader}>
                    <Link to={"/profile/" + post.creator}>
                      <img
                        src={
                          post.avatar
                            ? post.avatar
                            : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                        }
                        alt="poster-pic"
                      />
                    </Link>
                    <div className={classes.pseudo}>
                      <Link to={"/profile/" + post.creator}>
                        <h3>{post.name}</h3>
                      </Link>
                    </div>
                    {/* {post.creator !== userData._id && (
      <FollowHandler idToFollow={post.creator} type={"card"} />
    )} */}
                    {(post?.creator === user?.result._id ||
                      post?.creator === user?.result.googleId ||
                      user?.result.isAdmin) && (
                      <div className={classes.buttonContainer}>
                        {/* <div onClick={() => setCurrentId(post._id)}>
                              <Icons.RiEdit2Fill className="icon" />
                            </div> */}
                        <DeleteCard id={post._id} />
                      </div>
                    )}
                  </div>
                  <div className={classes.cardContenu}>
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
                      <hr />
                      <span>{dateParse(post.createdAt)}</span>
                    </div>
                    <div className={classes.footer}>
                      <div className={classes.commentIcon}>
                        <Icons.RiMessage3Fill
                          onClick={() => setShowComments(!showComments)}
                          className={classes.icon}
                        />
                        <span>{post.comments.length}</span>
                      </div>
                      <div className={classes.likeIcon}>
                        {post.likes?.find((like) => like === userId) ? (
                          <>
                            <Icons.RiHeartFill
                              className={classes.filled}
                              onClick={handleLike}
                            />

                            <span>
                              {post.likes.length > 2
                                ? `Vous et ${post.likes.length - 1} autres`
                                : `${post.likes.length}`}
                            </span>
                          </>
                        ) : (
                          <>
                            <Icons.RiHeartLine
                              className={classes.icon}
                              onClick={handleLike}
                            />
                            <span>
                              {post.likes.length ? post.likes.length : 0}
                            </span>
                          </>
                        )}
                      </div>
                      <Icons.RiShareForwardFill className={classes.icon} />
                    </div>
                    {showComments && <CardComments post={post} user={user} />}
                  </div>
                </div>
              ) : (
                <CircularProgress style={{color: '#90be3e'}} />
              )}
            </Grid>
            <Grid item xs={12} sm={5} md={4}>
              {/* ICI REMPLACER FORM PAR LES TENDANCES 
              <PostByCreator />*/}
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </>
  ) : (
    <Redirect to="/" />
  );
};

export default PostDetails;
