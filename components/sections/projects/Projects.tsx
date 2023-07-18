import SimpleProject, { GitHubRepo } from "../../../islands/SimpleProject.tsx";
import { Spinner } from "../../index.ts";
import { SectionTitle } from "../../common/section-title/SectionTitle.tsx";

interface ProjectsProps {
  data: GitHubRepo[] | null;
}

export function Projects(props: ProjectsProps) {
  const { data } = props;

  return (
    <section id="projects" className={"py-8 bg-background-5"}>
      <article className={"container mx-auto max-w-7xl p-8 text-white"}>
        <SectionTitle value="Projects" />

        {!data
          ? (
            <div className={"h-96 flex items-center justify-center flex-col"}>
              <h4
                className={"text-center text-3xl bg-clip-text text-transparent bg-gradient-to-br from-red-400 to-special-red font-mono font-semibold drop-shadow-lg"}
              >
                Failed to fetch data
              </h4>
              <p className="font-mono text-slate-500">
                reason: api limit reached
              </p>
            </div>
          )
          : (
            <div
              className={"grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 lg:grid-rows-2 lg:grid-cols-3 gap-4"}
            >
              {data.map((project) => {
                return project && (
                  <SimpleProject {...project} key={project.id} />
                );
              })}
            </div>
          )}
        <p className={"float-right text-slate-500 mt-2"}>
          Data are selected randomly from api.github.com
        </p>
      </article>
    </section>
  );
}
