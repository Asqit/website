import { SectionTitle } from "../../common/section-title/SectionTitle.tsx";
import { asset } from "$fresh/runtime.ts";
import { FaPaperclip } from "react-icons/fa";
import { Chip, JobBanner, TimeLine } from "../../index.ts";
import { Translation } from "../../../routes/_middleware.tsx";
import { skills as skillsData } from "../../../utils/skills.ts";
import AuthorImage from "../../common/author-image/AuthorImage.tsx";

interface AboutProps {
  about: Translation["about"];
  skills: Translation["skills"];
  experiences: Translation["experiences"];
}

export function About({ about, skills, experiences }: AboutProps) {
  return (
    <section
      id="about"
      className={"py-16 scroll-m-8"}
    >
      <main
        className={"container mx-auto max-w-6xl md:grid md:grid-cols-2 relative"}
      >
        <div>
          <article className={"p-8 md:sticky md:top-20"}>
            <SectionTitle value={about.title} />
            <JobBanner />
            <p
              className={`my-4`}
            >
              {about.paragraph_1}
            </p>
            <p
              className={`my-4`}
            >
              {about.paragraph_2}
            </p>
            <p
              className={`my-4`}
            >
              {about.paragraph_3}
            </p>
            <p
              className={`my-4`}
            >
              {about.paragraph_5}
            </p>

            <div className={"mt-4"}>
              <a
                target="blank"
                rel="author"
                href={asset("docs/cv.pdf")}
                className={"btn primary px-8 inline-flex gap-x-2 items-center capitalize"}
              >
                <FaPaperclip />
                <span>{about.cv_button}</span>
              </a>
              <a
                target="blank"
                rel="author"
                referrerpolicy={"no-referrer"}
                href={"https://www.github.com/asqit"}
                className={"btn ml-4 px-8 inline-flex font-semibold text-primary-0 dark:text-primary-10 gap-x-2 items-center capitalize bg-transparent hover:bg-transparent active:bg-transparent border-2 border-primary-0 dark:border-primary-10"}
              >
                GitHub
              </a>
            </div>
          </article>
        </div>
        <div>
          <section className={"my-8 p-4 md:p-0"}>
            <AuthorImage />
          </section>

          <section className={"my-32 scroll-m-64 "} id={"skills"}>
            <div className={"md:hidden p-4 md:p-16 mt-8"}>
              <SectionTitle value={skills.title} />
              <h2 className={"max-w-sm mx-auto text-lg"}>
                {skills.subtitle}
              </h2>
            </div>
            <div className={"grid grid-cols-2 grid-rows-2"}>
              <ul
                className={"flex gap-2 flex-wrap items-center justify-center my-4 col-span-full row-span-full group"}
              >
                {Object.entries(skillsData).map((type) =>
                  type[1].map((tech) => (
                    <li className={"group-hover:animate-move-right"}>
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
              <div class="from-accent-5 to-accent-5 dark:from-background-5 dark:to-background-5 dark:via-transparent via-transparent bg-gradient-to-r w-full h-full col-span-full row-span-full pointer-events-none" />
            </div>
          </section>

          <section className={"my-8 scroll-m-16"} id="experience">
            <div
              className={"p-4 md:p-16 mt-8"}
            >
              <div className={"md:hidden"}>
                <SectionTitle value={experiences.title} />
                <h2 className={"mb-4 font-semibold"}>{experiences.subtitle}</h2>
              </div>
              <TimeLine>
                {experiences.data.map((experience, index) => (
                  <TimeLine.Item key={index}>
                    <time
                      className={"mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-400 font-mono"}
                    >
                      {experience.time_span}
                    </time>
                    <h3
                      className={"text-lg font-semibold text-gray-900 dark:text-white"}
                    >
                      {experience.employer} - {experience.title}
                    </h3>
                    <p
                      className={"mb-2 text-base font-normal text-gray-600 dark:text-gray-400 max-w-3xl text-left"}
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
          </section>
        </div>
      </main>
    </section>
  );
}
