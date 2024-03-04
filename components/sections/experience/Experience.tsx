import { Translation } from "../../../routes/_middleware.tsx";
import { SectionTitle } from "../../common/section-title/SectionTitle.tsx";

interface ExperienceProps {
  lang: Translation["experience"];
}

export function Experience({ lang }: ExperienceProps) {
  return (
    <section id="experience" className={"py-16 scroll-m-8"}>
      <main className={"container mx-auto max-w-6xl p-8"}>
        <SectionTitle value={lang.title} />
        <ul>
          {lang.jobs.map((job) => (
            <li
              className={"my-8 bg-background-10 dark:bg-background-10-dark p-4 rounded-md"}
            >
              <div className={"my-4"}>
                <h1 className={"text-2xl font-bold"}>
                  {job.title} - {job.employer}
                </h1>

                <h2 className={"text-zinc-500 font-black"}>
                  {job.time_span}
                </h2>
              </div>
              <div>
                <p className={"dark:text-zinc-300 text-lg max-w-2xl"}>
                  {job.description}
                </p>
                <ul className={"flex gap-2 flex-wrap my-4"}>
                  {job.skills.map((skill) => (
                    <li
                      className={"bg-primary-0 text-white p-1 px-2 font-mono rounded-md"}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
}
