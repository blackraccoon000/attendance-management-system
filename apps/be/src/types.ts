import {JwtVariables} from "hono/jwt";

export type HonoEnv = {
  // JWTのペイロードの型
  Variables: JwtVariables<{
    name: string;
  }>;
  // 環境変数の型
  Bindings: {
    JWT_SECRET: string;
  };
};
