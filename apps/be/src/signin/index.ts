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
  zValidator("query", schema),
  async (c) => {
    const {username, password} = c.req.valid("query");
    console.log(username, password);

    try {
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
