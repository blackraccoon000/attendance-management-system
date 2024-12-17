import {getSession} from "./session";

/**
 * @example Authorization: await authHeader(request)
 */
export const authHeader = async (request: Request) => {
  const session = await getSession(request.headers.get("Cookie"));
  return `Bearer ${session.get("jwtToken")}`;
};
