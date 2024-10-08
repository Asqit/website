import { FreshContext } from "$fresh/server.ts";
import { LanguageState } from "../utils/type.index.ts";

import cs from "../utils/i18n/cs_cz.json" with { type: "json" };
import en from "../utils/i18n/en_us.json" with { type: "json" };

export type Translation = typeof cs;

export const handler = [
  async function setLanguage(req: Request, ctx: FreshContext<LanguageState>) {
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
