import {Hono} from "hono";
import {zValidator} from "@hono/zod-validator";
import {schema} from "./schema.js";

const app = new Hono();
export const login = app.post(
  "/login",
  zValidator("query", schema),
  async (c) => {
    const {username, password} = c.req.valid("query");
    console.log(username, password);

    return c.json({message: "login success"});
  }
);
