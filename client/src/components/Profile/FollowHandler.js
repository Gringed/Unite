import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser } from "../../actions/user";
import * as Icons from "react-icons/ri";
import Popup from "reactjs-popup";

const FollowHandler = ({ idToFollow, type, user }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const userData = useSelector((state) => state.users);
  const dispatch = useDispatch();


  const hasLikedPost = user.result.following.find(
    (like) => like === idToFollow
  );

  const handleFollow = async () => {
    dispatch(followUser(userData._id, { following: idToFollow }));

    if (hasLikedPost) {
      setIsFollowed(true);
    } else {
      setIsFollowed(false);
    }
  };
  useEffect(() => {
    if ((userData.following)) {
      if (userData.following.includes(idToFollow)) {
        setIsFollowed(true);
      } else setIsFollowed(false);
    }
  }, [userData, idToFollow]);

  return (
    <>
      {isFollowed && (userData) && (
        <span onClick={handleFollow}>
          {type === "suggestion" && <button className="unfollow-btn">Abonné</button>}
          {type === "card" && <Icons.RiCheckboxCircleFill className="icon"/>}
        </span>
      )}
      {isFollowed === false && (userData) && (
        <span onClick={handleFollow}>
          {type === "suggestion" && <button className="follow-btn">Suivre</button>}
          {type === "card" && <Icons.RiCheckboxCircleLine className="icon"/>}
        </span>
      )}
    </>
  )
};

export default FollowHandler;
