import React, { useState, useRef } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addComment } from "../../../actions/posts";
import FollowHandler from "../../Profile/FollowHandler";
import { timestampParser } from "../../Utils";
/* import EditDeleteCom from "./EditDeleteCom"; */
import useStyles from "./styles";

const CardComments = ({ post, user }) => {
  const [comments, setComments] = useState(post?.comments);
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
          commenterId: user?.result._id,
          commenterName: user?.result.name,
          commenterImg: user?.result.imageUrl,
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
          <div
            className={
              comment.commenterId === user?.result._id ||
              comment.commenterId === user?.result.googleId
                ? classes.commentContainerClient
                : classes.commentContainer
            }
          >
            <div className={classes.leftPart}>
              <img
                src={
                  comment.commenterImg
                    ? comment.commenterImg
                    : "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                }
                alt="commenter-pic"
              />
            </div>
            <div className={classes.rightPart}>
              <div className={classes.commentHeader}>
                <div className={classes.commentPseudo}>
                  <h3>{comment.commenterName}</h3>
                  {comment.commenterId !== user?.result._id && (
                    <FollowHandler
                      idToFollow={comment.commenterId}
                      type={"card"}
                      user={user}
                    />
                  )}
                </div>
                <span>{timestampParser(comment.timestamp)}</span>
              </div>
              <p>{comment.comment}</p>
              {/* <EditDeleteCom comment={comment} postId={post._id} /> */}
            </div>
          </div>
        </div>
      ))}

      {(user?.result._id || user?.result.googleId) && (
        <div className={classes.commentFooter}>
          <form onSubmit={handleComment} className={classes.commentForm}>
            <input
              type="text"
              name="text"
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              placeholder="Répondre . . ."
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
