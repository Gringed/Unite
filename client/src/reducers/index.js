import { combineReducers } from "redux";
import posts from "./posts";
import auth from "./auth";
import users from "./users";
import trends from "./trends";

export default combineReducers({
  posts,
  auth,
  users,
  trends
});
