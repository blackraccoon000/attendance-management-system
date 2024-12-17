import {Hono} from "hono";
import {zValidator} from "@hono/zod-validator";
import {schema} from "./schema";
import {PrismaClient} from "@prisma/client";

const app = new Hono();
const prisma = new PrismaClient();

export const signup = app.post(
  "/signup",
  zValidator("query", schema),
  async (c) => {
    const {username, password} = c.req.valid("query");
    console.log(username, password);

    try {
      const res = await prisma.user.create({
        data: {
          name: username,
          email: username,
          password: password,
        },
      });
      return c.json({message: "signup success"});
    } catch (error) {
      return c.json({message: "signup failed"}, 401);
    }
  }
);
