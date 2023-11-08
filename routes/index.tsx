import { About, Contact, Hero, Skills } from "../components/index.ts";
import { Handlers, PageProps, Status } from "$fresh/server.ts";
import { load } from "https://deno.land/std@0.198.0/dotenv/mod.ts";
import { filterGithubRepos } from "../utils/filterGithubRepos.ts";
import Projects from "../islands/Projects.tsx";
import { State } from "./_middleware.tsx";

export interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  url: string;
  description: string;
  language: string;
  html_url: string;
  topics: string[];
  visibility: boolean;
  fork: boolean;
}

export const handler: Handlers = {
  async GET(_, ctx) {
    const API_URL = "https://api.github.com/users/Asqit/repos";

    const response = await fetch(API_URL, {
      method: "GET",
    });

    if (response.status !== 200) {
      return ctx.render(null);
    }

    const parsed = await response.json() as GitHubRepository[];

    if (!parsed) {
      return ctx.render(null);
    }

    return await ctx.render(filterGithubRepos(parsed));
  },

  async POST(req, _) {
    const form = await req.formData();
    const email = form.get("email")?.toString();
    const message = form.get("message")?.toString();
    let topic: string | undefined;

    if (!Deno.env.has("NTFY_TOPIC")) {
      const env = await load();
      topic = env["NTFY_TOPIC"];
    } else {
      topic = Deno.env.get("NTFY_TOPIC");
    }

    if (!email || !message || !topic) {
      return new Response(null, {
        status: Status.BadRequest,
      });
    }

    const response = await fetch(
      `https://ntfy.sh/${topic}`,
      {
        method: "POST",
        body: JSON.stringify({
          title: `Website: new message from ${email}`,
          body: message,
        }),
      },
    );

    const headers = new Headers();

    if (response.ok) {
      headers.set("location", "/contact-successful");
      return new Response("OK", { status: Status.SeeOther, headers });
    }

    headers.set("location", "/contact-failed");
    return new Response(response.statusText, {
      status: Status.SeeOther,
      headers,
    });
  },
};
export default function Home(props: PageProps) {
  const { data } = props;

  const translation = props.state.translation as State["translation"];

  return (
    <>
      <Hero lang={translation["hero"]} />
      <About lang={translation["about"]} />
      <Skills lang={translation["skills"]} />
      <Projects lang={translation["projects"]} data={data} />
      <Contact lang={translation["contact"]} />
    </>
  );
}
