import {
  Avatar,
  Badge,
  ButtonBase,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Grow,
  LinearProgress,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { RiArrowGoBackFill, RiCalendar2Line } from "react-icons/ri";
import { FaBaby, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useParams } from "react-router-dom";
import { getUser, updateProfile } from "../../actions/user";
import FileBase from "react-file-base64";
import Navbar from "../Navbar/Navbar";
import { birthdayParse, dateParse } from "../Utils";
import useStyles from "./styles";
import Post from "../Posts/Post/Post";
import { getPosts } from "../../actions/posts";
import Trends from "../Trends/Trends";
const Profile = () => {
  const userInfo = JSON.parse(localStorage.getItem("profile"));
  const { user, users } = useSelector((state) => state.users);
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [googleAccount, setGoogleAccount] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [bio, setBio] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateProfile(id, {
        imageUrl: selectedFile,
        bio: bio ? bio : user.bio,
      })
    );
    handleClose();
    dispatch(getUser(id));
    dispatch(getPosts());
  };

  useEffect(() => {
    if (id.length === 24) {
      setGoogleAccount(false);
      dispatch(getUser(id));
      dispatch(getPosts());
    } else {
      setGoogleAccount(true);
      dispatch(getPosts());
    }
  }, [id, dispatch]);
  return userInfo ? (
    <div>
      <Navbar />
      <Grow in>
        <Container className={classes.container} maxWidth={"lg"}>
          <Grid container justifyContent="space-between" spacing={3}>
            <Grid item xs={12} sm={7} md={8}>
              <Link to={"/dashboard"} className={classes.links}>
                <div className={classes.back}>
                  <RiArrowGoBackFill />
                  <h1>Retour</h1>
                </div>
              </Link>
              {googleAccount ? (
                <div className={classes.profileContainer}>
                  <div className={classes.profileInfos}>
                    <div className={classes.profileAvatar}>
                      <div className={classes.profileAvatarImg}>
                        <img
                          src="https://i.pinimg.com/originals/a7/12/87/a71287b6208aba540472f58d3e6db77e.png"
                          alt="Utilisateur Google"
                        />
                      </div>
                    </div>
                    <div className={classes.profileInfosId}>
                      <h1>Utilisateur Google</h1>
                      <span>Identifiant: {id}</span>
                    </div>
                  </div>
                  <div className={classes.profilePost}>
                      <h1>Posts</h1>
                      <hr />
                      {isLoading ? (
                        <LinearProgress className={classes.progressBar} />
                      ) : (
                        posts?.map(
                          (post) =>
                            post.creator === id && (
                              <Grid key={post._id} item lg={12} md={12} sm={12}>
                                <Post
                                  post={post}
                                  user={user}
                                  users={users}
                                  currentId={post._id}
                                />
                              </Grid>
                            )
                        )
                      )}
                    </div>
                </div>
              ) : user ? (
                <>
                  <div className={classes.profileContainer}>
                    <div className={classes.profileInfos}>
                      <div className={classes.profileAvatar}>
                        <div className={classes.profileAvatarImg}>
                          {/* MAP ICI LES DONNES COMME POST */}
                          <img src={user.imageUrl} alt={user.imageUrl} />
                        </div>
                        {userInfo.result._id === user._id ? (
                          <ButtonBase onClick={handleClickOpen}>
                            Editer le profil
                          </ButtonBase>
                        ) : (
                          <ButtonBase
                            disabled
                            style={{
                              cursor: "not-allowed",
                              pointerEvents: "auto",
                            }}
                          >
                            S'abonner
                          </ButtonBase>
                        )}
                      </div>
                      <div className={classes.profileInfosId}>
                        <h1>{user.name}</h1>
                        <span>Identifiant: {user._id}</span>
                      </div>
                      <div className={classes.profileInfosBio}>
                        {user.bio ? (
                          <span>
                            {user.bio.split(" ").map((str) => {
                              if (str.startsWith("#")) {
                                return (
                                  <span key={str} className={classes.hashtag}>
                                    {str + " "}
                                  </span>
                                );
                              }
                              return str + " ";
                            })}
                          </span>
                        ) : userInfo.result._id === user._id ? (
                          <ButtonBase onClick={handleClickOpen}>
                            Ajoutez votre bio en modifiant votre profil...
                          </ButtonBase>
                        ) : (
                          <span>On ne sait pas grand chose à son sujet...</span>
                        )}
                      </div>

                      <div className={classes.profileInfosOthers}>
                        <span>
                          <FaBaby />
                          <p>
                            {user.birthday
                              ? dateParse(user.birthday).split(",")[0]
                              : "Date de naissance inconnue"}
                          </p>
                        </span>
                        <span>
                          <RiCalendar2Line />
                          <p>
                            A rejoint Unite en {birthdayParse(user.createdAt)}
                          </p>
                        </span>
                      </div>
                      <div className={classes.profileInfosFollows}>
                        <ButtonBase>
                          {user.followers.length}
                          <span> abonné{user.followers.length > 1 && "s"}</span>
                        </ButtonBase>
                        <ButtonBase>
                          {user.following.length}{" "}
                          <span>
                            {" "}
                            abonnement{user.following.length > 1 && "s"}
                          </span>
                        </ButtonBase>
                      </div>
                    </div>
                    <div className={classes.profilePost}>
                      <h1>Posts</h1>
                      <hr />
                      {isLoading ? (
                        <LinearProgress className={classes.progressBar} />
                      ) : (
                        posts?.map(
                          (post) =>
                            post.creator === user._id && (
                              <Grid key={post._id} item lg={12} md={12} sm={12}>
                                <Post
                                  post={post}
                                  user={user}
                                  users={users}
                                  currentId={post._id}
                                />
                              </Grid>
                            )
                        )
                      )}
                    </div>
                  </div>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    className={classes.profileDialog}
                  >
                    <DialogTitle className={classes.profileDialogTitle}>
                      Modifier mon profil
                    </DialogTitle>
                    <DialogContent>
                      <div className={classes.profileAvatarModif}>
                        <Badge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          badgeContent={
                            <>
                              <FaPlus className={classes.small} />
                              <div className={classes.fileInput}>
                                <FileBase
                                  type="file"
                                  multiple={false}
                                  onDone={({ base64 }) =>
                                    setSelectedFile(base64)
                                  }
                                />
                              </div>
                            </>
                          }
                        >
                          <Avatar
                            className={classes.avatar}
                            alt={user.name}
                            src={selectedFile ? selectedFile : user.imageUrl}
                          />
                        </Badge>
                      </div>
                      <div className={classes.profileBioModif}>
                        <span>Bio</span>
                        <textarea
                          name="bio"
                          id="bio"
                          placeholder={
                            user.bio ? user.bio : "Modifiez votre bio"
                          }
                          onChange={(e) => setBio(e.target.value)}
                          defaultValue={user.bio}
                          required
                        />
                      </div>
                    </DialogContent>
                    <DialogActions>
                      <ButtonBase onClick={handleClose}>Annuler</ButtonBase>
                      <ButtonBase onClick={handleSubmit}>
                        Enregistrer
                      </ButtonBase>
                    </DialogActions>
                  </Dialog>
                </>
              ) : (
                <LinearProgress className={classes.progressBar} />
              )}
            </Grid>
            <Grid item xs={12} sm={5} md={4}>
              {/* ICI REMPLACER FORM PAR LES TENDANCES */}
              <Trends />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  ) : (
    <Redirect to="/" />
  );
};

export default Profile;
