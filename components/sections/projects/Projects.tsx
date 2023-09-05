import SimpleProject from "../../../islands/SimpleProject.tsx";
import { SectionTitle } from "../../common/section-title/SectionTitle.tsx";
import { projects } from "../../../data/project.ts";
import { asset } from "https://deno.land/x/fresh@1.1.5/runtime.ts";
import HighlightedProject from "../../common/HighlightedProject/HighlightedProject.tsx";

export function Projects() {
  return (
    <section
      id="projects"
      className={"py-16 relative z-50 scroll-m-8"}
    >
      <article className={"container mx-auto max-w-6xl p-8"}>
        <SectionTitle value="Projects" />

        <div className={"grid grid-cols-1 gap-8"}>
          <HighlightedProject
            isEven={true}
            title="Deno-Chatter"
            githubLink="https://github.com/asqit/deno-chatter"
            releaseLink="https://deno-chatter.deno.dev/"
            description="Deno-Chatter is anonymous chat application written with fresh.js, deno, Typescript and WebSocket."
            tags={["HTML", "SCSS"]}
            imageSrc="images/deno-chatter.webp"
          />
          <HighlightedProject
            isEven={false}
            title="Momentify"
            imageSrc={asset("images/momentify.webp")}
            githubLink="https://github.com/asqit/momentify"
            releaseLink="https://momentify-server.onrender.com"
            description="Momentify is a platform for sharing your moments with others. It's my learning purpose project written in MERN Stack"
            tags={["MERN", "Tailwind", "i18n", "RTK + Query"]}
          />
          <HighlightedProject
            isEven={false}
            title="BackRoads"
            githubLink="https://github.com/asqit/backroads"
            releaseLink="https://backroads-asqit.netlify.app"
            description="BackRoads is website for fictional tour company. It was my learning project, while learning css."
            tags={["HTML", "CSS"]}
            imageSrc="images/backroads.webp"
          />
        </div>

        <div className={"my-8 mt-16"}>
          <h2
            className={"text-4xl font-black text-center capitalize"}
          >
            Other Projects
          </h2>
          <h3
            className={"text-slate-600 dark:text-slate-400 text-center text-lg"}
          >
            (with shiny borders)
          </h3>
        </div>
        <div
          className={"grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 lg:grid-rows-2 lg:grid-cols-3 gap-4"}
        >
          {projects.map((project) => {
            return <SimpleProject {...project} key={project.id} />;
          })}
        </div>
      </article>
    </section>
  );
}
