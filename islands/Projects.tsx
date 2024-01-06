import SimpleProject from "../components/common/simple-project/SimpleProject.tsx";
import { SectionTitle } from "../components/common/section-title/SectionTitle.tsx";
import { projects } from "../utils/project.ts";
import { useCallback } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";
import { Translation } from "../routes/_middleware.tsx";
import { GitHubRepository } from "../utils/type.index.ts";

interface ProjectsProps {
  lang: Translation["projects"];
  data: GitHubRepository[] | null;
}

export default function Projects(props: ProjectsProps) {
  const { data, lang } = props;

  const handleMouseMove = useCallback(
    (e: JSX.TargetedMouseEvent<HTMLDivElement>) => {
      for (const project of document.querySelectorAll(".project")) {
        const rect = project.getBoundingClientRect();
        const x = e.clientX - rect.left + "px";
        const y = e.clientY - rect.top + "px";
        const pr = project as HTMLAnchorElement;

        pr.style.setProperty("--mouse-x", x);
        pr.style.setProperty("--mouse-y", y);
      }
    },
    [],
  );

  return (
    <section
      id="projects"
      className={"py-16 relative z-50 scroll-m-8"}
    >
      <article className={"container mx-auto max-w-6xl md:p-8"}>
        <div className={"my-8 mt-16 text-center"}>
          <SectionTitle value={lang.title} />
          <h3
            className={"text-slate-600 dark:text-slate-400 text-center text-lg"}
          >
            {lang.other_projects_subtitle}
          </h3>
        </div>
        <div
          id="simple-projects"
          onMouseMove={handleMouseMove}
          className={"flex overflow-x-auto snap-x flex-nowrap md:grid md:grid-cols-2 md:grid-rows-3 lg:grid-rows-2 lg:grid-cols-3 gap-4"}
        >
          {data
            ? data.map((project) => (
              <SimpleProject key={project.id} {...project} />
            ))
            : projects.map((project) => (
              <SimpleProject key={project.id} {...project} />
            ))}
        </div>
      </article>
    </section>
  );
}
