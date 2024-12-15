import type {Route} from "./+types/route";
import type {HeadersFunction} from "react-router";
import {data, Outlet} from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    {title: "New React Router App"},
    {name: "description", content: "Welcome to React Router!"},
  ];
}

export const headers: HeadersFunction = () => ({
  "WWW-Authenticate": "Basic",
});

/**
 * Ｂａｓｉｃ認証のテスト実装
 * @param request
 * @returns
 */
const isAuthorized = (request: Request) => {
  const header = request.headers.get("Authorization");

  if (!header) return false;

  const base64 = header.replace("Basic ", "");
  const [username, password] = Buffer.from(base64, "base64")
    .toString()
    .split(":");

  // 環境変数などでIDとパスワードを渡す
  // 普通は環境変数化しておく
  return username === "admin" && password === "password";
};

export const loader = async ({request}: Route.LoaderArgs) => {
  if (!isAuthorized(request)) {
    // 認証されたページで利用するデータ
    return data({authorized: false}, {status: 401});
  }

  return data({authorized: true});
};

export default function BasicAuth({loaderData}: Route.ComponentProps) {
  const {authorized} = loaderData;

  if (!authorized) {
    return <div>Unauthorized</div>;
  }
  return <Outlet />;
}
