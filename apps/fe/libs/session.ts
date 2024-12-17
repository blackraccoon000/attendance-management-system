import {createCookieSessionStorage} from "react-router";

// どんな形でCookieにデータがセットされるかテスト中
type SessionData = {
  jwtToken: string;
  xxxxxxxx: string;
};

type SessionFlashData = {};

export const {getSession, commitSession, destroySession} =
  createCookieSessionStorage<SessionData, SessionFlashData>({
    cookie: {
      name: "__session",
      httpOnly: true,
      maxAge: 60 * 60,
      path: "/",
      sameSite: "lax",
      secrets: ["s3cret1"],
      secure: false,
    },
  });
