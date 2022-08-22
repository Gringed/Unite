import * as api from "../api";

export const getUser = (id) => async (dispatch) => {
    try {
        dispatch({ type: "START_LOADING" });
        const { data } = await api.getUser(id);
        dispatch({
          type: "GET_USER",
          payload: { post: data },
        });
      } catch (error) {
        console.log(error.message);
      }
}

export const followUser = (followerId, idToFollow) => async(dispatch) => {
    try {
        
    } catch (error) {
        console.log(error.message)
    }
}

