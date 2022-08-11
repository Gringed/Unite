import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Icons from "react-icons/ri";
import { timestampParser } from "../../Utils";
import { NavLink } from "react-router-dom";

import FileBase from "react-file-base64";
import { createPost, updatePost } from "../../../actions/posts";
import useStyles from "./styles";
import { Paper } from "@material-ui/core";

const NewPost = ({ currentId, setCurrentId, user }) => {
  const [isLoading, setIsLoading] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creator: "",
    selectedFile: "",
  });
  const [video, setVideo] = useState("");
  const [message, setMessage] = useState("");
  const caracmax = 250;
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(
        updatePost(currentId, {
          ...postData,
          message: message,
          name: user?.result.name,
          avatar: user?.result.imageUrl,
        })
      );
    } else {
      dispatch(
        createPost({
          ...postData,
          message: message,
          name: user?.result.name,
          avatar: user?.result.imageUrl,
        })
      );
    }
    clear();
  };
  const clear = () => {
    setCurrentId(null);
    setPostData({
      selectedFile: "",
    });
    setVideo("");
    setMessage("");
  };

  useEffect(() => {
    if (post) {
      setPostData(post);
      setMessage(message);
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
        if (findLink[i].includes("/\n/gi")) {
          setMessage(message.replace("/\n/gi", "<br />"))
        }
        
      }
    };
    handleVideo();
  }, [post, message, video, postData]);

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <p>Veuillez vous connecter pour poster quelque chose</p>
      </Paper>
    );
  }

  return (
    <div className={classes.postContainer}>
      {isLoading ? (
        <img
          className={classes.i}
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
        />
      ) : (
        <>
          <div className={classes.userInfo}>
            <NavLink to="/profil">
              <img src={user.result.imageUrl} alt="user-img" />
            </NavLink>
          </div>

          <div className={classes.postForm}>
            <textarea
              name="message"
              id="message"
              placeholder={currentId ? 'Modifiez votre message':`Quoi de neuf  ${user?.result.name.split(" ")[0]} ?`}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required
            />
            <hr />
            {message || postData.selectedFile || video.length > 2 ? (
              <li className={classes.cardContainer}>
                <div className={classes.cardLeft}>
                  <img src={user?.result.imageUrl} alt="user-pic" />
                </div>
                <div className={classes.cardRight}>
                  <div className={classes.cardHeader}>
                    <div className={classes.pseudo}>
                      <h3>{user?.result.name}</h3>
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
        </>
      )}
    </div>
  );
};

export default NewPost;
