import React, { useState, useRef } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addComment } from "../../../actions/posts";
/* import FollowHandler from "../Profil/FollowHandler"; */
import { timestampParser } from "../../Utils";
/* import EditDeleteCom from "./EditDeleteCom"; */
import useStyles from "./styles";

const CardComments = ({ post, user }) => {
  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState("");

  // FAIRE USERS DATA ICI

  const classes = useStyles();
  const dispatch = useDispatch();
  const commentsRef = useRef();

  const handleComment = async (e) => {
    e.preventDefault();
    if (comment) {
      const newComment = await dispatch(
        addComment(post._id, {
          comment: comment,
          commenterId: user?.result._id,
          commenterName: user?.result.name,
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
              comment.commenterId === user?.result._id
                ? classes.commentContainerClient
                : classes.commentContainer
            }
          >
            <div className={classes.leftPart}>
              <img
                src={
                  user?.result._id === comment.commenterId
                    ? user?.result.imageUrl
                    : "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                }
                alt="commenter-pic"
              />
            </div>
            <div className="right-part">
              <div className="comment-header">
                <div className="pseudo">
                  <h3>{comment.commenterName}</h3>
                  {comment.commenterId !== user?.result._id &&
                    {
                      /* <FollowHandler
                    idToFollow={comment.commenterId}
                    type={"card"}
                  /> */
                    }}
                </div>
                <span>{timestampParser(comment.timestamp)}</span>
              </div>
              <p>{comment.comment}</p>
              {/* <EditDeleteCom comment={comment} postId={post._id} /> */}
            </div>
          </div>
        </div>
      ))}
      ;
      {user?.result._id && (
        <form onSubmit={handleComment} className={classes.commentForm}>
          <input
            type="text"
            name="text"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            placeholder="Répondre . . ."
          />
          <br />
          {comment && (
            <button>
              <RiSendPlaneFill />
            </button>
          )}
        </form>
      )}
    </div>
  );
};

export default CardComments;
