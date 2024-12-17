import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
  // route("/", "routes/basic-auth/route.tsx", [index("routes/home/route.tsx")]),
  // index("routes/login/route.tsx"),
  route("/login", "routes/login/route.tsx"),
] satisfies RouteConfig;
