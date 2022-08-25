import { get, post } from "./requests";

export const getPosts = () => get("/Post/GetPosts");
export const getPostLikesByPostId = (id) => get("xxx" + id);

export const getPostsByUserId = () => get("url");
export const getPostsBySearch = () => get("url");
export const getPostCommentsByPostId = () => get("url");
export const getPostBlock = () => get("url");
