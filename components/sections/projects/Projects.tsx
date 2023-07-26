import SimpleProject, { GitHubRepo } from "../../../islands/SimpleProject.tsx";
import { SectionTitle } from "../../common/section-title/SectionTitle.tsx";
import HighlightedProject from "../../../islands/HighlightedProject.tsx";
import { projects } from "../../../data/project.ts";

interface ProjectsProps {
  data: GitHubRepo[] | null;
}

export function Projects(props: ProjectsProps) {
  const { data } = props;

  return (
    <section id="projects" className={"py-16 bg-background-0 relative z-50"}>
      <article className={"container mx-auto max-w-7xl p-8 text-white"}>
        <SectionTitle value="Projects" />

        <div className={"grid grid-cols-1 gap-8"}>
          <HighlightedProject
            isEven={false}
            title="BackRoads"
            githubLink="https://github.com/asqit/backroads"
            releaseLink="https://backroads-asqit.netlify.app"
            description="BackRoads is website for fictional tour company. It was my learning project, while learning css."
            tags={["HTML", "CSS"]}
            imageSrc="images/backroads.png"
          />
          <HighlightedProject
            isEven={true}
            title="TeaStation"
            githubLink="https://github.com/asqit/teastation"
            releaseLink="https://teastation-asqit.netlify.app"
            description="TeaStation is e-shop landing page for fictional tea shop. It's written in html and sass and it served me as learning project."
            tags={["HTML", "SCSS"]}
            imageSrc="images/teastation.png"
          />
        </div>

        <h2
          className={"text-4xl font-black my-4 mt-8 text-center capitalize text-transparent bg-clip-text bg-gradient-to-bl from-primary-10 to-primary-5"}
        >
          Other Projects
        </h2>
        <div
          className={"grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 lg:grid-rows-2 lg:grid-cols-3 gap-4"}
        >
          {projects.map((project) => {
            return project && <SimpleProject {...project} key={project.id} />;
          })}
        </div>
      </article>
    </section>
  );
}
