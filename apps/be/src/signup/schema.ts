import {z} from "zod";

export const schema = z.object({
  username: z.string().email(),
  password: z.string().min(6),
});
