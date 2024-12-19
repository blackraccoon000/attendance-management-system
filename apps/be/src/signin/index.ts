import {Hono} from "hono";
import {zValidator} from "@hono/zod-validator";
import {schema} from "./schema";
import {env, getRuntimeKey} from "hono/adapter";
import {sign} from "hono/jwt";
import {HonoEnv} from "../types";
import {HTTPException} from "hono/http-exception";

const app = new Hono<HonoEnv>();

export const signin = app.post(
  "/signin",
  zValidator("json", schema),
  async (c) => {
    try {
      // const form = await c.req.formData();
      // console.log(form);

      const json = await c.req.json();
      // console.log(json, c.req.header());

      // const {username, password} = c.req.valid("query");
      // ユーザ認証処理

      const {JWT_SECRET} = env(c, getRuntimeKey());
      // TODO:ペイロードを整備する
      const token = await sign({username: "hono"}, JWT_SECRET);
      return c.json({message: "login success", token});
    } catch (error) {
      // ユーザ認証失敗
      throw new HTTPException(401, {message: "login failed", cause: error});
    }
  }
);
