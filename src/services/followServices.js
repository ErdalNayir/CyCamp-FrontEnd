import { get, post } from "./requests";

export const getFollowing = (id) => get("/Follow/GetFollowersById/" + id);
export const getFollowers = (id) => get("/Follow/GetFollowersById/" + id);
