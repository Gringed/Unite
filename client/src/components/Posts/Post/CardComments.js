import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { /* addComment, */ getPosts } from "../../../actions/posts";
/* import FollowHandler from "../Profil/FollowHandler"; */
import { timestampParser } from "../../Utils";
/* import EditDeleteCom from "./EditDeleteCom"; */

const CardComments = ({ post, user }) => {
  const [text, setText] = useState("");
  
  const dispatch = useDispatch();

  const handleComment = (e) => {
    e.preventDefault();

    
  };

  return (
    <div className="comments-container">
      {post.comments.map((comment) => {
        return (
          <div
            className={
              comment.commenterId === user?.result._id
                ? "comment-container client"
                : "comment-container"
            }
            key={comment._id}
          >
            <div className="left-part">
              <img
                /* src={
                  !isEmpty(usersData[0]) &&
                  usersData
                    .map((user) => {
                      if (user._id === comment.commenterId) return "./ReseauSocialV2" + user.picture;
                      else return null;
                    })
                    .join("")
                } */
                src="https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png"
                alt="commenter-pic"
              />
            </div>
            <div className="right-part">
              <div className="comment-header">
                <div className="pseudo">
                  <h3>{comment.commenterName}</h3>
                  {comment.commenterId !== user?.result._id && (
                    {/* <FollowHandler
                      idToFollow={comment.commenterId}
                      type={"card"}
                    /> */}
                  )}
                </div>
                <span>{timestampParser(comment.timestamp)}</span>
              </div>
              <p>{comment.text}</p>
              {/* <EditDeleteCom comment={comment} postId={post._id} /> */}
            </div>
          </div>
        );
      })}
      {user?.result._id && (
        <form action="" onSubmit={handleComment} className="comment-form">
          <input
            type="text"
            name="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Laisser un commentaire"
          />
          <br />
          <input type="submit" value="Envoyer" />
        </form>
      )}
    </div>
  );
};

export default CardComments;