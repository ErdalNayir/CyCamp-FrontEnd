import { get, post } from "./requests";

export const getRoutes = () => get("url");
export const getRoutesBySearch = () => get("url");
export const getRoutesByUserId = () => get("url");
export const getRouteBlock = () => get("url");
export const getRouteRatingsByRouteId = () => get("url");
export const getRouteCommentsByRouteId = () => get("url");

export const createRoutes = (data) => post("/Route/CreateRoute", data);
