import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Icons from "react-icons/ri";
import { timestampParser } from "../../Utils";
import { Link } from "react-router-dom";
import FileBase from "react-file-base64";
import { createPost, getPosts, updatePost } from "../../../actions/posts";
import useStyles from "./styles";
import { Avatar, Paper } from "@material-ui/core";

const NewPost = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creator: "",
    selectedFile: "",
  });
  const { user } = useSelector((state) => state.users);
  const [video, setVideo] = useState("");
  const [message, setMessage] = useState("");
  const caracmax = 250;
  const post = useSelector((state) =>
    (currentId ? state.posts.posts.find((p) => p._id === currentId) : null)
  );
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId) {
      await dispatch(
        updatePost(currentId, {
          ...postData,
          message: message,
          name: user.name,
          avatar: user.imageUrl,
        })
      );
    } else {
      await dispatch(
        createPost({
          ...postData,
          message: message,
          name: user.name,
          avatar: user.imageUrl,
        })
      );
    }
    clear();
    dispatch(getPosts());
  };
  const clear = () => {
    setCurrentId(0);
    setPostData({
      selectedFile: "",
    });
    setVideo("");
    setMessage("");
  };

  useEffect(() => {
    if (post) {
      setPostData(post);

    }

    const handleVideo = () => {
      let findLink = message.split(" ");
      for (let i = 0; i < findLink.length; i++) {
        if (
          findLink[i].includes("https://www.yout") ||
          findLink[i].includes("https://yout")
        ) {
          let embed = findLink[i].replace("watch?v=", "embed/");
          setVideo(embed.split("&")[0]);
          findLink.splice(i, 1);
          setMessage(findLink.join(" "));
          setPostData({ selectedFile: "" });
        }
      }
    };
    handleVideo();
  }, [post, dispatch, message, video, postData]);

  if (!user) {
    return (
      <Paper className={classes.paper}>
        <p>Veuillez vous connecter pour poster quelque chose</p>
      </Paper>
    );
  }

  return (
    <div className={classes.postContainer}>
      <div className={classes.userInfo}>
        <Link to={"/profile/" + (user._id ? user._id : user.result.googleId)}>
          <Avatar
            className={classes.avatar}
            alt={user.name}
            src={user.imageUrl}
          >
            {user.name.charAt(0)}
          </Avatar>
        </Link>
      </div>

      <div className={classes.postForm}>
        {currentId ? (
          <textarea
            name="message"
            id="message"
            onChange={(e) => setMessage(e.target.value)}
            defaultValue={post.message}
            required
          />
        ) : (
          <textarea
            name="message"
            id="message"
            placeholder={`Quoi de neuf  ${user.name.split(" ")[0]} ?`}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          />
        )}
        <hr />
        {message || postData.selectedFile || video.length > 2 ? (
          <li className={classes.cardContainer}>
            <div className={classes.cardLeft}>
              <img src={user.imageUrl} alt="user-pic" />
            </div>
            <div className={classes.cardRight}>
              <div className={classes.cardHeader}>
                <div className={classes.pseudo}>
                  <h3>{user.name}</h3>
                </div>
                <span>{timestampParser(Date.now())}</span>
              </div>
              <div className={classes.content}>
                <p>
                  {message.split(" ").map((str) => {
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
                <img
                  src={postData.selectedFile ? postData.selectedFile : ""}
                  alt=""
                />
                {video && (
                  <iframe
                    src={video}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video}
                  ></iframe>
                )}
              </div>
            </div>
          </li>
        ) : null}
        <div className={classes.footerForm}>
          <div className={classes.icon}>
            <Icons.RiImage2Fill />
            <div className={classes.fileInput}>
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setPostData({ ...postData, selectedFile: base64 })
                }
              />
            </div>
          </div>
          <div className={classes.btnSend}>
            <span className={classes.caracmax}>
              {caracmax - message.length < 0
                ? "Trop de caractères"
                : caracmax - message.length + " caractères restants"}
            </span>
            {message || postData.selectedFile ? (
              <button className="cancel" onClick={clear}>
                Annuler message
              </button>
            ) : null}
            {(message && message.length <= caracmax) ||
            postData.selectedFile ||
            video ? (
              <button className="send" onClick={handleSubmit}>
                Envoyer
              </button>
            ) : (
              <button
                className={classes.disabled}
                disabled
                onClick={handleSubmit}
              >
                Envoyer
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
