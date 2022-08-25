import { get, post, postJSON } from "./requests";

export const getUsers = () => get("/User/GetUsers");
export const getUserBlock = (id) => get("xx" + id);

export const loginUser = (data) => post("/User/Login", data);

// export const getUsersBySearch = () => get("url");
// export const getUserFollowing = () => get("url");
// export const getUserFollowers = () => get("url");
// export const getUserResetPassword = () => get("url");
