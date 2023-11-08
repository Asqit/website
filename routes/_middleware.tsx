import { MiddlewareHandlerContext } from "$fresh/server.ts";

import cs from "../utils/i18n/cs_cz.json" assert { type: "json" };
import en from "../utils/i18n/en_us.json" assert { type: "json" };

export type Translation = typeof cs;

export type State = {
  lang: "en" | "cs";
  translation: Translation;
};

export const handler = [
  async function setLanguage(
    req: Request,
    ctx: MiddlewareHandlerContext<State>,
  ) {
    const cookie = req.headers.get("cookie");
    if (cookie && cookie.includes("lang")) {
      ctx.state.lang = cookie.split("=")[1] as "en" | "cs";
      ctx.state.translation = ctx.state.lang === "en" ? en : cs;
      return await ctx.next();
    } else {
      ctx.state.lang = req.headers.get("accept-language")?.includes("cz")
        ? "cs"
        : "en";
      ctx.state.translation = ctx.state.lang === "en" ? en : cs;
      const res = await ctx.next();
      res.headers.set("Set-Cookie", `lang=${ctx.state.lang}`);
      return res;
    }
  },
];
