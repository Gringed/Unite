import * as api from "../api";

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.getUsers();
    dispatch({
      type: "GET_USERS",
      payload: [data],
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
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
  
  try {
    const { data } = await api.followUser(id, follower);
    dispatch({ type: "FOLLOW_USER", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateProfile = (id, user) => async (dispatch) => {
  try {
    const { data } = await api.updateProfile(id, user);
    dispatch({ type: "UPDATE_PROFILE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
