import { SectionTitle } from "../../common/section-title/SectionTitle.tsx";
import { asset } from "$fresh/runtime.ts";
import { FaPaperclip } from "react-icons/fa";
import { JobBanner } from "../../index.ts";
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
        className={"container mx-auto max-w-7xl md:grid md:grid-cols-2 relative"}
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
                className={"btn btn-primary px-8 inline-flex gap-x-2 items-center capitalize"}
              >
                <FaPaperclip />
                <span>{about.cv_button}</span>
              </a>
              <a
                target="blank"
                rel="author"
                referrerpolicy={"no-referrer"}
                href={"https://www.github.com/asqit"}
                className={"btn btn-outline btn-primary ml-4 px-8"}
              >
                GitHub
              </a>
            </div>
          </article>
        </div>
        <div>
          <section
            className={"my-8 p-4 md:p-0 animate-reveal"}
            style={{ animationTimeline: "view()" }}
          >
            <AuthorImage />
          </section>

          <section
            className={"my-32 scroll-m-64 animate-reveal"}
            id={"skills"}
            style={{ animationTimeline: "view()" }}
          >
            <div className={"md:hidden p-4 md:p-16 mt-8 text-center"}>
              <SectionTitle value={skills.title} />
              <h2 className={"max-w-sm mx-auto text-lg"}>
                {skills.subtitle}
              </h2>
            </div>
            <div className={"grid grid-cols-2 grid-rows-2 animate-reveal"}>
              <ul
                className={"flex gap-2 flex-wrap items-center justify-center my-4 col-span-full row-span-full group"}
              >
                {Object.entries(skillsData).map((type) =>
                  type[1].map((tech) => (
                    <li className={"group-hover:animate-move-right"}>
                      <div className={"badge gap-2 badge-xl"}>
                        <tech.Icon />
                        <span>{tech.value}</span>
                      </div>
                    </li>
                  ))
                )}
              </ul>
              <div class="from-base-100 to-base-100  via-transparent bg-gradient-to-r w-full h-full col-span-full row-span-full pointer-events-none" />
            </div>
          </section>

          <section
            className={"my-8 scroll-m-16 animate-reveal"}
            id="experience"
            style={{ animationTimeline: "view()" }}
          >
            <div
              className={"p-4 md:p-0 mt-8"}
            >
              <div className={"md:hidden text-center"}>
                <SectionTitle value={experiences.title} />
                <h2 className={"mb-4 font-semibold"}>{experiences.subtitle}</h2>
              </div>
              <ul
                className={"timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"}
              >
                {experiences.data.map((exp, i) => (
                  <li>
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    {i === 0 && <hr className="bg-primary" />}
                    <div
                      className={`${
                        i % 2 == 0 ? "timeline-start" : "timeline-end"
                      }`}
                    >
                      <time
                        className={"mb-1 text-sm font-normal leading-none font-mono"}
                      >
                        {exp.time_span}
                      </time>
                      <h3
                        className={"text-lg font-semibold text-primary my-4"}
                      >
                        {exp.employer} - {exp.title}
                      </h3>
                      <p
                        className={"my-4 text-base font-normal max-w-3xl text-left"}
                      >
                        {exp.description}
                      </p>
                      <div
                        className={"flex flex-wrap gap-2 font-mono lowercase"}
                      >
                        {exp.skills.map((skill, i) => (
                          <span
                            className={"badge badge-lg badge-primary"}
                            key={i}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <hr className="bg-primary" />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </main>
    </section>
  );
}
