import {hc} from "hono/client";
import type {AppRoute} from "../../be/src";

export const api = hc<AppRoute>("http://localhost:3000");
