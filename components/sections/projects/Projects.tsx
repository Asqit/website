import SimpleProject, { GitHubRepo } from "../../../islands/SimpleProject.tsx";
import { Spinner } from "../../index.ts";
import { SectionTitle } from "../../common/section-title/SectionTitle.tsx";

interface ProjectsProps {
  data: GitHubRepo[] | null;
}

export function Projects(props: ProjectsProps) {
  const { data } = props;

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
              className={"grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 lg:grid-rows-2 lg:grid-cols-3 gap-4"}
            >
              {Array.isArray(data)
                ? data.map((project) => {
                  return project && (
                    <SimpleProject {...project} key={project.id} />
                  );
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
        <p className={"float-right text-slate-500 mt-2"}>
          Data are selected randomly from api.github.com
        </p>
      </article>
    </section>
  );
}
