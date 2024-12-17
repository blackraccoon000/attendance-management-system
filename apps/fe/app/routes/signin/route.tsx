import {data, Form} from "react-router";
import type {Route} from "./+types/route";
import {api} from "honoClient";
import {useEffect} from "react";
import {commitSession, getSession} from "libs/session";

export const action = async ({request}: Route.ActionArgs) => {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);

  // 保存

  try {
    const res = await api.signin.$post({
      query: {
        // 暫定追加　後でzodでバリデーションする
        username: values.email as string,
        password: values.password as string,
      },
    });

    // JWTトークンを取得
    const {message, token} = await res.json();

    // セッションに保存
    const session = await getSession(request.headers.get("Cookie"));
    session.set("jwtToken", token);
    const headers = {
      "Set-Cookie": await commitSession(session),
    };

    // Cookieをブラウザにわたす
    return data({message}, {headers});
  } catch (error) {
    console.error(error);
  }
  // session.set("xxxxxxxx", "yyyyyyyy");
  // const headers = {
  //   "Set-Cookie": await commitSession(session),
  // };
  // return data({token}, {headers});

  // 取得
  // const session = await getSession(request.headers.get("Cookie"));

  // const res = await api.auth.$get(undefined, {
  //   headers: {
  //     Authorization: `Bearer ${session.get("jwtToken")}`,
  //   },
  // });
  // const result = await res.text();
  // console.log(result);
  // return data(result);
};

export default function Signup(props: Route.ComponentProps) {
  useEffect(() => {
    console.log(props.actionData?.message);
  }, []);

  return (
    <div className="bg-slate-200 w-full h-screen flex justify-center items-center">
      <div className="w-1/3 bg-slate-600 text-slate-200 pt-5 py-8">
        <h1 className="font-extrabold text-3xl text-center">Signin</h1>
        <div className="flex justify-center items-center">
          <Form method="post" className="flex flex-col gap-3">
            <label htmlFor="email">
              Email
              <input
                name="email"
                type="text"
                className="w-full bg-slate-200 text-slate-700 px-2"
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                name="password"
                type="password"
                className="w-full bg-slate-200 text-slate-700 px-2"
              />
            </label>
            <button type="submit">submit</button>
          </Form>
        </div>
      </div>
    </div>
  );
}
