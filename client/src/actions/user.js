import * as api from "../api";

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
}

export const followUser = (id, follower) => async(dispatch) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  try {
    const { data } = await api.followUser(id, follower);
    dispatch({ type: "FOLLOW_USER", payload: data });
    
  } catch (error) {
    console.log(error);
  }
}


