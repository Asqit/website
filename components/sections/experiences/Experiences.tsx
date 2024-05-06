import { Translation } from "../../../routes/_middleware.tsx";
import { SectionTitle } from "../../common/section-title/SectionTitle.tsx";
import { TimeLine } from "../../index.ts";

interface Props {
  lang: Translation["experiences"];
}

export function Experiences({ lang }: Props) {
  return (
    <section
      className={"py-16 scroll-m-8"}
      id="experience"
    >
      <main className={"container mx-auto max-w-7xl"}>
        <div className={"md:p-16 bg-background-10-dark rounded-2xl mt-8"}>
          <SectionTitle value={lang.title} />

          <h2 className={"mb-4 font-semibold"}>{lang.subtitle}</h2>

          <TimeLine>
            {lang.data.map((experience, index) => (
              <TimeLine.Item key={index}>
                <time
                  className={"mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 font-mono"}
                >
                  {experience.time_span}
                </time>
                <h3
                  className={"text-lg font-semibold text-gray-900 dark:text-white"}
                >
                  {experience.employer} - {experience.title}
                </h3>
                <p
                  className={"mb-2 text-base font-normal text-gray-500 dark:text-gray-400 max-w-3xl text-left"}
                >
                  {experience.description}
                </p>
                <div
                  className={"flex flex-wrap gap-2 font-mono lowercase"}
                >
                  {experience.skills.map((skill, i) => (
                    <span key={i}>{skill}</span>
                  ))}
                </div>
              </TimeLine.Item>
            ))}
          </TimeLine>
        </div>
      </main>
    </section>
  );
}
