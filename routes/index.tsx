import { Handlers, PageProps } from "$fresh/server.ts";
import { About, Contact, Footer, Hero, Projects } from "../components/index.ts";
import MouseFollower from "../islands/MouseFollower.tsx";
import Navbar from "../islands/Navbar.tsx";
import { GitHubRepo } from "../islands/SimpleProject.tsx";

export const handler: Handlers<GitHubRepo[] | null> = {
  async GET(_, ctx) {
    const resp = await fetch(`https://api.github.com/users/Asqit/repos`);

    // Dev. env. variable to stop from re-fetching
    //const resp = { status: 404 };

    if (resp.status === 404) {
      return ctx.render(null);
    }

    if (resp.status === 403) {
      console.error("Limit Exceeded");
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
    <div className="relative overflow-hidden">
      <Navbar />
      <MouseFollower />
      <Hero />
      <About />
      <Projects data={data} />
      <Contact />
      <Footer />
    </div>
  );
}
