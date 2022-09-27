import React, { useState, useRef } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addComment } from "../../../actions/posts";
import FollowHandler from "../../Profile/FollowHandler";
import { timestampParser } from "../../Utils";
/* import EditDeleteCom from "./EditDeleteCom"; */
import useStyles from "./styles";

const CardComments = ({ post, user, users }) => {
  const [comments, setComments] = useState(post?.comments);
  const userInfo = JSON.parse(localStorage.getItem("profile"));
  const [comment, setComment] = useState("");
  const caracmax = 250;
  // FAIRE USERS DATA ICI

  const classes = useStyles();
  const dispatch = useDispatch();
  const commentsRef = useRef();

  const handleComment = async (e) => {
    e.preventDefault();
    if (comment && comment.length <= caracmax) {
      const newComment = await dispatch(
        addComment(post._id, {
          comment: comment,
          commenterId: userInfo?.result._id,
          commenterName: userInfo?.result.name,
          commenterImg: userInfo?.result.imageUrl,
        })
      );
      setComments(newComment);
      setComment("");
      commentsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={classes.commentsContainer}>
      {comments.map((comment) => (
        <div key={comment._id}>
          <div ref={commentsRef}></div>
          <div className={classes.commentContainer}>
            <div className={classes.leftPart}>
              {comment.commenterId?.length === 24 ? (
                <img
                  src={users[0]
                    .map((user) => {
                      if (user._id === comment.commenterId) {
                        return user.imageUrl;
                      } else {
                        return null;
                      }
                    })
                    .join("")}
                  alt="poster-pic"
                />
              ) : (
                <img src={comment.commenterImg} alt="poster-pic" />
              )}
            </div>
            <div className={classes.rightPart}>
              <div className={classes.commentHeader}>
                <div className={classes.commentPseudo}>
                  {comment.commenterId?.length === 24 ? (
                    <Link to={"/profile/" + post.creator}>
                      <div className={classes.pseudo}>
                        <h3>
                          {users[0]
                            .map((user) => {
                              if (user._id === comment.commenterId) {
                                return user.name;
                              } else {
                                return null;
                              }
                            })
                            .join("")}
                        </h3>
                      </div>
                    </Link>
                  ) : (
                    <Link to={"/profile/" + post.creator}>
                      <h3>{comment.commenterName}</h3>
                    </Link>
                  )}
                  {/* {comment.commenterId !== user?._id && (
                    <FollowHandler
                      idToFollow={comment.commenterId}
                      type={"card"}
                      user={user}
                    />
                  )} */}
                </div>
                <span>{timestampParser(comment.timestamp)}</span>
              </div>
              <p>{comment.comment}</p>
              {/* <EditDeleteCom comment={comment} postId={post._id} /> */}
            </div>
          </div>
        </div>
      ))}

      {(user._id || userInfo?.result.googleId) && (
        <div className={classes.commentFooter}>
          <form onSubmit={handleComment} className={classes.commentForm}>
            <input
              type="text"
              name="text"
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              placeholder={comments.length < 1 ? "Soyez le premier à commenter..." : "Répondre..."}
            />
            <br />
            {comment && comment.length <= caracmax && (
              <button>
                <RiSendPlaneFill />
              </button>
            )}
          </form>
          <span className={classes.caracmax}>
            {caracmax - comment.length < 0
              ? "Trop de caractères"
              : caracmax - comment.length + " caractères restants"}
          </span>
        </div>
      )}
    </div>
  );
};

export default CardComments;
