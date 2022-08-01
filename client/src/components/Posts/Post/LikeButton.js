import React, { useContext, useEffect, useState } from "react";
/* import { UidContext } from "../AppContext"; */
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useDispatch } from "react-redux";
import { likePost, unlikePost } from "../../../actions/posts";
import * as Icons from 'react-icons/ri'

const LikeButton = ({ post }) => {
  const [liked, setLiked] = useState(false);
 /*  const uid = useContext(UidContext); */
  const dispatch = useDispatch();

 /*  const like = () => {
    dispatch(likePost(post._id, uid))
    setLiked(true);
  };

  const unlike = () => {
    dispatch(unlikePost(post._id, uid))
    setLiked(false);
  }; */

  /* useEffect(() => {
    if (post.likers.includes(uid)) setLiked(true);
    else setLiked(false);
  }, [uid, post.likers, liked]); */

  return (
    <div className="like-container">
      {/* uid === null */  (
        <Popup
          trigger={<Icons.RiHeartLine />}
          position={["bottom center", "bottom right", "bottom left"]}
          closeOnDocumentClick
        >
          <div>Connectez-vous pour aimer un post !</div>
        </Popup>
      )}
      {/* uid && liked === false */  (
        <Icons.RiHeartLine  /* onClick={like} */ className="icon"/>
      )}
      {/* uid && liked */ (
        <Icons.RiHeartFill /* onClick={unlike} */ className="icon filled"/>
      )}
      <span>{/* {post.likers.length} */}0</span>
    </div>
  );
};

export default LikeButton;