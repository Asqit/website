import { SectionTitle } from "../../common/section-title/SectionTitle.tsx";
import { skills } from "../../../data/skills.ts";
import { Chip } from "../../index.ts";

export function Skills() {
  return (
    <section className={"py-16 px-4 scroll-m-16"} id="skills">
      <main className={"container mx-auto max-w-6xl text-white text-center"}>
        <SectionTitle value="Skills" />
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
          <div
            className={"md:col-span-2 p-8 bg-background-5 relative z-20 rounded-md"}
          >
            <h2 className={"text-2xl mb-6"}>Programming Languages</h2>
            <ul
              className={"flex gap-2 justify-center items-center flex-wrap"}
            >
              {skills.languages.map((l) => (
                <li key={l.id}>
                  <Chip className={"flex items-center justify-center gap-x-2"}>
                    <>
                      <l.Icon />
                      <span>{l.value}</span>
                    </>
                  </Chip>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={"p-8 bg-background-5 relative z-20 rounded-md"}
          >
            <h2 className={"text-2xl mb-6"}>Front-End Development</h2>
            <ul
              className={"flex gap-2 justify-center items-center flex-wrap"}
            >
              {skills.frontEnd.map((l) => (
                <li key={l.id}>
                  <Chip className={"flex items-center justify-center gap-x-2"}>
                    <>
                      <l.Icon />
                      <span>{l.value}</span>
                    </>
                  </Chip>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={"p-8 bg-background-5 relative z-20 rounded-md"}
          >
            <h2 className={"text-2xl mb-6"}>Back-End Development</h2>
            <ul
              className={"flex gap-2 justify-center items-center flex-wrap"}
            >
              {skills.backEnd.map((l) => (
                <li key={l.id}>
                  <Chip className={"flex items-center justify-center gap-x-2"}>
                    <>
                      <l.Icon />
                      <span>{l.value}</span>
                    </>
                  </Chip>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </section>
  );
}
