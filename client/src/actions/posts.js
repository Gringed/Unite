import * as api from "../api";

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const { data } = await api.fetchPost(id);
    dispatch({
      type: "FETCH_POST",
      payload: { post: data },
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPosts = async (skip) => {
  try {
    
    const  data  = await fetch(
			`http://localhost:3001/posts?skip=${skip}`,
			{
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			}
		);
    return await data.json();

  } catch (error) {
    console.log(error.message);
  }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const {
      data: { data },
    } = await api.fetchPostsBySearch(searchQuery);
    dispatch({ type: "FETCH_BY_SEARCH", payload: { data } });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    console.log(error.message);
  }
};
export const getTrends = (sortedArray)  => async (dispatch) => {
  try {
    dispatch({ type: "GET_TRENDS", payload: sortedArray  });
  } catch (error) {
    console.log(error.message);
  }
};
export const createPost = (post) => async (dispatch) => {
  try {
    
    const { data } = await api.createPost(post);

    dispatch({ type: "CREATE", payload: data });

  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  try {
    const { data } = await api.likePost(id, user?.token);
    dispatch({ type: "LIKE", payload: data });
    
  } catch (error) {
    console.log(error);
  }
};

export const addComment =
  (id, comment, commenterId, commenterName, commenterImg) => async (dispatch) => {
    try {
      const { data } = await api.addComment(
        id,
        comment,
        commenterId,
        commenterName,
        commenterImg
      );
      dispatch({ type: "ADD_COMMENT", payload: data });
      return data.comments;
    } catch (error) {
      console.log(error);
    }
  };
