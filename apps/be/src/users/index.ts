import {Hono} from "hono";
import {zValidator} from "@hono/zod-validator";
import {PrismaClient} from "@prisma/client";

const app = new Hono();
const prisma = new PrismaClient();

export const users = app.get(
  "/users",
  // 今後、filteringなどの機能調整をする予定
  // zValidator("query", schema),
  async (c) => {
    // const {username, password} = c.req.valid("query");
    // console.log(username, password);

    try {
      const res = await prisma.user.findMany({
        select: {
          id: true,
          name: true,
        },
      });

      return c.json(res);
    } catch (error) {
      return c.json({message: "get users failed"}, 401);
    }
  }
);
