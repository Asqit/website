import { furtherData, languagesData, libsData } from "../../../data/skills.ts";
import { SectionTitle } from "../../common/section-title/SectionTitle.tsx";
import { Chip } from "../../index.ts";

export function FurtherDetails() {
  return (
    <section className="md:bg-background-5/10 bg-background-0 backdrop-blur-[200px] py-8 text-white">
      <div className={"container max-w-7xl mx-auto p-8"}>
        <SectionTitle value="Further Reading" />
        <main
          className={"grid grid-cols-1 md:grid-cols-2 items-center justify-center"}
        >
          <article>
            <h2 className={"mt-4 font-bold text-xl text-slate-400"}>
              Education
            </h2>
            <ul>
              <li className={"my-2"}>
                <b>EDUCAnet, České Budějovice</b>
                <ol>
                  <li>High School with focus of IT</li>
                  <li>2017 - 2021</li>
                  <li>
                    - multimedia (Vector & Raster graphics, Video editing, SFX)
                  </li>
                  <li>
                    - Programming in:{" "}
                    <code>HTML5, CSS3, JavaScript, PHP, MySQL, Java</code>
                  </li>
                  <li>
                    - Hardware and basics of computer science
                  </li>
                </ol>
              </li>
              <li className={"my-2"}>
                <b>Jihočeská univerzita</b>
                <ol>
                  <li>Comp. science - Bachelor's Degree</li>
                  <li>
                    2022 - 2023 <b>(ditched)</b>
                  </li>
                  <li>
                    I really loved my time there, but because I am suffering
                    from strong social anxiety since covid I had to quit.
                  </li>
                  <li>
                    - Learned basics of applications architecture. (MVP, MVC,
                    MVVM...)
                  </li>
                  <li>
                    - Learned basics of Data Structures and algorithms
                  </li>
                </ol>
              </li>
            </ul>
          </article>
          <article>
            <h2 className={"mt-4 font-bold text-xl text-slate-400"}>Skills</h2>

            <h3 className={"my-2 font-bold"}>
              Programming languages
            </h3>
            <ul className={"flex items-center gap-2 my-2 font-mono flex-wrap"}>
              {languagesData.map((lang) => {
                return (
                  <li key={lang.id}>
                    <Chip className={"flex items-center gap-x-2"}>
                      {lang.Icon ? <lang.Icon /> : null}
                      {lang.value}
                      <span className={"bg-background-10 px-1"}>
                        {lang.level}
                      </span>
                    </Chip>
                  </li>
                );
              })}
            </ul>

            <h3 className={"my-2 font-bold"}>
              Libraries & frameworks
            </h3>
            <ul className={"flex items-center gap-2 my-2 font-mono flex-wrap"}>
              {libsData.map((lib) => {
                return (
                  <li key={lib.id}>
                    <Chip className={"flex items-center gap-x-2"}>
                      {lib.Icon ? <lib.Icon /> : null}
                      {lib.value}
                      <span className={"bg-background-10 px-1"}>
                        {lib.level}
                      </span>
                    </Chip>
                  </li>
                );
              })}
            </ul>

            <h3 className={"my-2 font-bold"}>Further knowledge</h3>
            <ul className={"flex items-center gap-2 my-2 font-mono flex-wrap"}>
              {furtherData.map((etc) => {
                return (
                  <li key={etc.id}>
                    <Chip className={"flex items-center gap-x-2"}>
                      {etc.Icon ? <etc.Icon /> : null}
                      {etc.value}
                      <span className={"bg-background-10 px-1"}>
                        {etc.level}
                      </span>
                    </Chip>
                  </li>
                );
              })}
            </ul>

            <p className={"float-right text-slate-500 mt-2"}>
              Each skill has a knowledge level. Levels spans from 0 to 10
            </p>
          </article>
        </main>
      </div>
    </section>
  );
}
