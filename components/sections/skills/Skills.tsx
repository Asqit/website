import { SectionTitle } from "../../common/section-title/SectionTitle.tsx";
import { skills } from "../../../data/skills.ts";
import { Chip } from "../../index.ts";

export function Skills() {
  return (
    <section
      className={"py-16 px-4 scroll-m-16"}
      id="skills"
    >
      <main className={"container mx-auto max-w-6xl text-center relative"}>
        <SectionTitle value="Skills" />
        <h2 className={"max-w-sm mx-auto md:hidden text-lg"}>Temporarly growing list of technologies, that I current control at at least beginner level.</h2>
        <h3 className={"max-w-xs mx-auto md:hidden text-sm text-slate-600 dark:text-slate-400"}>(I once will be removed as unused object by garbage collector)</h3>
        <div className={"grid grid-cols-2 grid-rows-2 py-16 md:hidden"}>
          <ul className={"flex gap-2 flex-wrap items-center justify-center my-4 col-span-full row-span-full"}>
            {Object.entries(skills).map(type => type[1].map(tech => <li>
              <Chip className={"flex items-center justify-center gap-x-2 whitespace-nowrap snap-center"}>
                      <>
                        <tech.Icon />
                        <span>{tech.value}</span>
                      </>
                    </Chip>
              </li>))}
          </ul>
          <div class="from-background-5 to-background-5 dark:from-background-5-dark dark:to-background-5-dark dark:via-transparent via-transparent bg-gradient-to-r w-full h-full col-span-full row-span-full pointer-events-none"/>
        </div>
        
        <div className={"hidden md:grid md:grid-cols-6 md:grid-rows-2 md:gap-4"}>
          <div
            className={"md:col-span-4 p-8 bg-background-10 dark:bg-background-10-dark relative z-20 rounded-md flex flex-col items-center justify-center"}
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
            className={"p-8 bg-background-10 dark:bg-background-10-dark relative z-20 rounded-md md:col-span-2 flex flex-col items-center justify-center"}
          >
            <h2 className={"text-2xl mb-6"}>Tool Box</h2>
            <ul
              className={"flex gap-2 justify-center items-center flex-wrap"}
            >
              {skills.tools.map((t) => (
                <li key={t.id}>
                  <Chip className={"flex items-center justify-center gap-x-2"}>
                    <>
                      <t.Icon />
                      <span>{t.value}</span>
                    </>
                  </Chip>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={"p-8 bg-background-10 dark:bg-background-10-dark relative z-20 rounded-md md:col-span-3 flex flex-col items-center justify-center"}
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
            className={"p-8 bg-background-10 dark:bg-background-10-dark relative z-20 rounded-md md:col-span-3 flex flex-col items-center justify-center"}
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
