import { SectionTitle } from "../../common/section-title/SectionTitle.tsx";
import { skills } from "../../../utils/skills.ts";
import { Chip } from "../../index.ts";
import { Translation } from "../../../routes/_middleware.tsx";

interface SkillsProps {
  lang: Translation["skills"];
}

export function Skills({ lang }: SkillsProps) {
  return (
    <section
      className={"py-16 px-4 scroll-m-16"}
      id="skills"
    >
      <main className={"container mx-auto max-w-6xl text-center relative"}>
        <SectionTitle value={lang.title} />
        <h2 className={"max-w-sm mx-auto text-lg"}>
          {lang.subtitle}
        </h2>
        <div className={"grid grid-cols-2 grid-rows-2 py-16"}>
          <ul
            className={"flex gap-2 flex-wrap items-center justify-center my-4 col-span-full row-span-full"}
          >
            {Object.entries(skills).map((type) =>
              type[1].map((tech) => (
                <li>
                  <Chip
                    className={"flex items-center justify-center gap-x-2 whitespace-nowrap snap-center"}
                  >
                    <>
                      <tech.Icon />
                      <span>{tech.value}</span>
                    </>
                  </Chip>
                </li>
              ))
            )}
          </ul>
          <div class="from-background-5 to-background-5 dark:from-background-5-dark dark:to-background-5-dark dark:via-transparent via-transparent bg-gradient-to-r w-full h-full col-span-full row-span-full pointer-events-none" />
        </div>
      </main>
    </section>
  );
}
