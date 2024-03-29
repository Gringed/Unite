import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3001" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const getUser = (id) => API.get(`/user/${id}`);
export const getUsers = () => API.get(`/user`);

export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}`);
export const createPost = (newPost) => API.post("/posts", newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const followUser = (id, follower) => API.patch(`/user/${id}/followUser`, follower);
export const addComment = (id, comment, commenterId, commenterName, commenterImg) => API.patch(`/posts/${id}/addComment`, comment, commenterId, commenterName, commenterImg);
export const updatePost = (id, updatedPost) =>
API.patch(`/posts/${id}`, updatedPost);
export const updateProfile = (id, updatedProfile) =>
API.patch(`/user/${id}`, updatedProfile);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
