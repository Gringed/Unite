import * as api from "../api";

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.getUsers();
    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getUser = (id) => async (dispatch) => {
  try {
    const { data } = await api.getUser(id);
    dispatch({
      type: "GET_USER",
      payload: { user: data },
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const followUser = (id, follower) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  try {
    const { data } = await api.followUser(id, follower);
    dispatch({ type: "FOLLOW_USER", payload: data });
  } catch (error) {
    console.log(error);
  }
};
