import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
  // route("/", "routes/basic-auth/route.tsx", [index("routes/home/route.tsx")]),
  // index("routes/login/route.tsx"),
  route("/signin", "routes/signin/route.tsx"),
  route("/signup", "routes/signup/route.tsx"),
  route("/users", "routes/users/route.tsx"),
] satisfies RouteConfig;
