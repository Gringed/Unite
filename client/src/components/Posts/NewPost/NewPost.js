import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Icons from "react-icons/ri";

import { NavLink } from "react-router-dom";

import FileBase from "react-file-base64";
import { createPost, updatePost } from "../../../actions/posts";
import useStyles from "./styles";

const NewPost = ({ currentId, setCurrentId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creator: "",
    message: "",
    selectedFile: "",
  });

  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };
  const clear = () => {
    setCurrentId(null)
    setPostData({
      message: "",
      selectedFile: "",
    });
  };

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

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
              <img
                src="https://beitniger.com/wp-content/uploads/2020/12/user.png "
                alt="user-img"
              />
            </NavLink>
          </div>

          <div className={classes.postForm}>
            <textarea
              name="message"
              id="message"
              placeholder={"Quoi de neuf Jean ?"}
              onChange={(e) =>
                setPostData({ ...postData, message: e.target.value })
              }
              value={postData.message}
              required
            />
            <hr />
            {postData.message ? (
              <li className={classes.cardContainer}>
                <div className={classes.cardLeft}>
                  <img
                    src="https://beitniger.com/wp-content/uploads/2020/12/user.png"
                    alt="user-pic"
                  />
                </div>
                <div className={classes.cardRight}>
                  <div className={classes.cardHeader}>
                    <div className={classes.pseudo}>
                      <h3>Jean Clenche</h3>
                    </div>
                    <span>time</span>
                  </div>
                  <div className={classes.content}>
                    <p>{postData.message}</p>
                    <img src={postData.selectedFile} alt="" />
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
                {postData.message ? (
                  <button className="cancel" onClick={clear}>
                    Annuler message
                  </button>
                ) : null}
                {postData.message ? (
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
