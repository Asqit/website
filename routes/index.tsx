import {
  About,
  Contact,
  Experience,
  Hero,
  Skills,
} from "../components/index.ts";
import { defineRoute, STATUS_CODE } from "$fresh/server.ts";
import { GitHubRepository, LanguageState } from "../utils/type.index.ts";
import Projects from "../islands/Projects.tsx";
import { filterGithubRepos } from "../utils/misc.ts";

async function fetchData() {
  const resp = await fetch("https://api.github.com/users/Asqit/repos", {
    method: "GET",
  });

  if (resp.status !== STATUS_CODE.OK) {
    return null;
  }

  const parsed = await resp.json() as GitHubRepository[];
  return filterGithubRepos(parsed);
}

export default defineRoute(async (req, ctx) => {
  const data = await fetchData();
  const state = ctx.state as Record<string, unknown>;
  const translation = state.translation as LanguageState["translation"];

  return (
    <>
      <Hero lang={translation["hero"]} />
      <About lang={translation["about"]} />
      <Experience lang={translation["experience"]} />
      <Skills lang={translation["skills"]} />
      <Projects lang={translation["projects"]} data={data} />
      <Contact lang={translation["contact"]} />
    </>
  );
});
