import { SimpleProject } from "../components/index.ts";
import { SectionTitle } from "../components/section-title/SectionTitle.tsx";
import { projectsData } from "../data/projects.ts";

export default function Projects() {
  return (
    <section id="projects" className={"py-8"}>
      <article className={"container mx-auto max-w-7xl p-8 text-white"}>
        <SectionTitle value="Projects" />

        <div
          className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}
        >
          {projectsData.map((project) => {
            return <SimpleProject {...project} key={project.id} />;
          })}
        </div>
      </article>
    </section>
  );
}
