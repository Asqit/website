import { About, Contact, Hero } from "../components/index.ts";
import { defineRoute, STATUS_CODE } from "$fresh/server.ts";
import { GitHubRepository, LanguageState } from "../utils/type.index.ts";
import { filterGithubRepos } from "../utils/misc.ts";
import Projects from "../islands/Projects.tsx";

async function fetchData() {
  const resp = await fetch("https://api.github.com/users/Asqit/repos", {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${Deno.env.get("GITHUB_TOKEN")}`,
    },
  });

  if (resp.status !== STATUS_CODE.OK) {
    return null;
  }

  const parsed = await resp.json() as GitHubRepository[];
  return filterGithubRepos(parsed);
}

export default defineRoute(async (_req, ctx) => {
  const data = await fetchData();
  const state = ctx.state as Record<string, unknown>;
  const translation = state.translation as LanguageState["translation"];

  return (
    <>
      <Hero lang={translation["hero"]} />
      <About
        about={translation["about"]}
        skills={translation["skills"]}
        experiences={translation["experiences"]}
      />
      <Projects lang={translation["projects"]} data={data} />
      <Contact lang={translation["contact"]} />
    </>
  );
});
