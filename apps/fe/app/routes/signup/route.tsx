import {Form} from "react-router";
import type {Route} from "./+types/route";
import {api} from "libs/honoClient";
import {useEffect} from "react";
import {authHeader} from "libs/authHeadr";
import {schema} from "be/src/signup/schema";

export const action = async ({request}: Route.ActionArgs) => {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);

  const json = schema.parse(values);

  // const session = await getSession(request.headers.get("Cookie"));
  const res = await api.signup.$post(
    {
      json,
    },
    {
      headers: {
        Authorization: await authHeader(request),
      },
    }
  );
  const result = await res.json();

  return result;
};

export default function Signin(props: Route.ComponentProps) {
  useEffect(() => {
    console.log(props.actionData);
  }, []);

  return (
    <div className="bg-slate-200 w-full h-screen flex justify-center items-center">
      <div className="w-1/3 bg-slate-600 text-slate-200 pt-5 py-8">
        <h1 className="font-extrabold text-3xl text-center">Signup</h1>
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
