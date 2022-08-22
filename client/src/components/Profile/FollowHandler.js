import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser } from "../../actions/user";
import * as Icons from 'react-icons/ri'

const FollowHandler = ({ idToFollow, type, user }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const dispatch = useDispatch();

  const handleFollow = () => {
    dispatch(followUser(user._id, idToFollow));
    setIsFollowed(true);
  };


  useEffect(() => {
    if (!user?.following) {
      if (user?.following.includes(idToFollow)) {
        setIsFollowed(true);
      } else setIsFollowed(false);
    }
  }, [user, idToFollow]);

  return (
    <>
      {isFollowed && !user && (
        <span onClick={handleFollow}>
          {type === "suggestion" && <button className="unfollow-btn">Abonné</button>}
          {type === "card" && <Icons.RiCheckboxCircleFill className="icon"/>}
        </span>
      )}
      {isFollowed === false && !user && (
        <span onClick={handleFollow}>
          {type === "suggestion" && <button className="follow-btn">Suivre</button>}
          {type === "card" && <Icons.RiCheckboxCircleLine className="icon"/>}
        </span>
      )}
    </>
  );
};

export default FollowHandler;