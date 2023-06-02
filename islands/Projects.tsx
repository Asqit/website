import { GitHubRepo, SimpleProject, Spinner } from "../components/index.ts";
import { SectionTitle } from "../components/section-title/SectionTitle.tsx";
import { useEffect, useState } from "preact/hooks";

export default function Projects() {
  const [data, setData] = useState<GitHubRepo[] | null>(null);

  useEffect(() => {
    (async () => {
      const resp = await fetch(`https://api.github.com/users/Asqit/repos`);

      if (resp.status === 404) {
        return;
      }

      let repos: GitHubRepo[] = await resp.json();
      repos = repos.filter((repo) => repo.fork !== true);

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

      setData(finalData);
    })();
  }, []);

  return (
    <section id="projects" className={"py-8"}>
      <article className={"container mx-auto max-w-7xl p-8 text-white"}>
        <SectionTitle value="Projects" />

        {!data
          ? (
            <div className={"h-96"}>
              <Spinner />
            </div>
          )
          : (
            <div
              className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}
            >
              {Array.isArray(data)
                ? data.map((project) => {
                  return <SimpleProject {...project} key={project.id} />;
                })
                : (
                  <h4
                    className={"text-center col-span-3 text-white font-semibold"}
                  >
                    Failed to fetch data
                  </h4>
                )}
            </div>
          )}
      </article>
    </section>
  );
}
