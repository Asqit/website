import SimpleProject, { GitHubRepo } from "../../../islands/SimpleProject.tsx";
import { SectionTitle } from "../../common/section-title/SectionTitle.tsx";
import HighlightedProject from "../../../islands/HighlightedProject.tsx";
import { projects } from "../../../data/project.ts";
import { asset } from "https://deno.land/x/fresh@1.1.5/runtime.ts";

export function Projects() {
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
            imageSrc="images/backroads.webp"
          />
          <HighlightedProject
            isEven={true}
            title="TeaStation"
            githubLink="https://github.com/asqit/teastation"
            releaseLink="https://teastation-asqit.netlify.app"
            description="TeaStation is e-shop landing page for fictional tea shop. It's written in html and sass and it served me as learning project."
            tags={["HTML", "SCSS"]}
            imageSrc="images/teastation.webp"
          />
          <HighlightedProject
            isEven={false}
            title="Notes App 📓"
            imageSrc={[
              asset("images/notes-app-1.webp"),
              asset("images/notes-app-2.webp"),
            ]}
            githubLink="https://github.com/asqit/notes-app"
            releaseLink="https://notes-app-asqit.netlify.app"
            description="An notebook application written in TypeScript with React and styled by boostrap. The application is able to sort posts by tags and render / write notes in markdown format."
            tags={["React", "TypeScript", "Bootstrap", "Markdown"]}
          />
        </div>

        <h2
          className={"text-4xl font-black my-8 mt-16 text-center capitalize text-transparent bg-clip-text bg-gradient-to-bl from-primary-10 to-primary-5"}
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
