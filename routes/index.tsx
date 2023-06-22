import { Handlers, PageProps } from "$fresh/server.ts";
import {
  About,
  Contact,
  Footer,
  FurtherDetails,
  Hero,
  Projects,
} from "../components/index.ts";
import Navbar from "../islands/Navbar.tsx";
import { GitHubRepo } from "../islands/SimpleProject.tsx";

export const handler: Handlers<GitHubRepo[] | null> = {
  async GET(_, ctx) {
    const resp = await fetch(`https://api.github.com/users/Asqit/repos`);

    if (resp.status === 404) {
      return ctx.render(null);
    }

    if (resp.status === 403) {
      console.log("Limit Exceeded");
      return ctx.render(null);
    }

    let repos: GitHubRepo[] = await resp.json();

    if (Array.isArray(repos)) {
      repos = repos.filter((repo) => repo.fork !== true);
    }

    const finalData: GitHubRepo[] = [];

    while (true) {
      const current = repos[Math.floor(Math.random() * repos.length - 1)];

      if (finalData.includes(current)) {
        continue;
      }

      finalData.push(current);

      if (finalData.length === 6) {
        break;
      }
    }

    return ctx.render(finalData);
  },
};

export default function Home({ data }: PageProps<GitHubRepo[] | null>) {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects data={data} />
      <Contact />
      <Footer />
    </>
  );
}
