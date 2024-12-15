import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
  route("/", "routes/basic-auth/route.tsx", [index("routes/home/route.tsx")]),
] satisfies RouteConfig;
