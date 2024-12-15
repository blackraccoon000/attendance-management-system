import {serve} from "@hono/node-server";
import {Hono} from "hono";
import {jwt, JwtVariables, sign} from "hono/jwt";
import {logger} from "hono/logger";
import {env, getRuntimeKey} from "hono/adapter";
import {config as dotenvConfig} from "dotenv";

// 環境変数を読み込む
dotenvConfig();

const app = new Hono<{
  // JWTのペイロードの型
  Variables: JwtVariables<{
    name: string;
  }>;
  // 環境変数の型
  Bindings: {
    JWT_SECRET: string;
  };
}>();

// JWT発行前の処理
app.get("/", async (c) => {
  const {JWT_SECRET} = env(c, getRuntimeKey());
  const token = await sign({username: "hono"}, JWT_SECRET);
  return c.text(`Hello Hono! token: ${token}`);
});

app
  .use("/*", (c, next) => {
    const secret = env(c).JWT_SECRET;
    const jwtMiddleware = jwt({
      secret,
    });
    return jwtMiddleware(c, next);
  })
  .use(logger());

app.get("/auth", (c) => {
  const payload = c.get("jwtPayload");
  return c.json(payload);
});

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
