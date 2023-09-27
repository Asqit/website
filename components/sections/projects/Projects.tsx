import SimpleProject from "../../../islands/SimpleProject.tsx";
import { SectionTitle } from "../../common/section-title/SectionTitle.tsx";
import { projects } from "../../../data/project.ts";
import { asset } from "https://deno.land/x/fresh@1.1.5/runtime.ts";
import { GitHubRepository } from "../../../routes/index.tsx";
import HighlightedProject from "../../common/highlighted-project/HighlightedProject.tsx";

interface ProjectsProps {
  data: GitHubRepository[] | null;
}

export function Projects(props: ProjectsProps) {
  const { data } = props;

  return (
    <section
      id="projects"
      className={"py-16 relative z-50 scroll-m-8"}
    >
      <article className={"container mx-auto max-w-6xl md:p-8"}>
        <div className={"text-center md:text-left"}>
          <SectionTitle value="Projects" />
        </div>

        <div className={"grid grid-cols-1 gap-8 px-4"}>
          <HighlightedProject
            isEven={true}
            title="Deno-Chatter"
            githubLink="https://github.com/asqit/deno-chatter"
            releaseLink="https://deno-chatter.deno.dev/"
            description="Deno-Chatter is anonymous chat application written with fresh.js, deno, Typescript and WebSocket."
            tags={["Deno", "WebSocket", "TypeScript", "Fresh", "Tailwind"]}
            imageSrc="images/deno-chatter.webp"
          />
          <HighlightedProject
            isEven={false}
            title="Momentify"
            imageSrc={asset("images/momentify.webp")}
            githubLink="https://github.com/asqit/momentify"
            releaseLink="https://github.com/asqit/momentify"
            description="Momentify is a platform for sharing your moments with others. It's my learning purpose project written in MERN Stack (Very slow loading time due to provider)"
            tags={["MERN", "Tailwind", "i18n", "RTK + Query"]}
          />
          <HighlightedProject
            isEven={true}
            title="Website"
            githubLink="https://github.com/asqit/website"
            releaseLink="https://asqit.deno.dev"
            description="An accessible, fast and responsive website about me. To achieve all these target it uses Fresh.js, which is SSG framework for deno runtime."
            tags={["Fresh", "Tailwind", "Preact", "Deno"]}
            imageSrc="images/website.jpg"
          />
        </div>

        <div className={"my-8 mt-16"}>
          <h2
            className={"text-4xl font-black text-center capitalize"}
          >
            Other Projects
          </h2>
          <h3
            className={"text-slate-600 dark:text-slate-400 text-center text-lg hidden dark:block"}
          >
            (with shiny borders)
          </h3>
        </div>
        <div
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
        {data
          ? (
            <p
              className={"font-semibold text-sm float-right my-4 text-slate-600 dark:text-slate-400"}
            >
              Random projects fetched from <code>api.github.com</code>
            </p>
          )
          : null}
      </article>
    </section>
  );
}
