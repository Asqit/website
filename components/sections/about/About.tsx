import { furtherData, languagesData, libsData } from "../../../data/skills.ts";
import AuthorImage from "../../common/author-image/AuthorImage.tsx";
import { SectionTitle } from "../../common/section-title/SectionTitle.tsx";
import { Accordion, Chip } from "../../index.ts";
import { about } from "../../../data/about.ts";

export function About() {
  return (
    <section
      id="about"
      className={"md:bg-background-10/10 bg-background-10 backdrop-blur-[200px] py-8"}
    >
      <main
        className={"container mx-auto max-w-7xl grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-16 items-center p-8 text-white font-sans"}
      >
        <article>
          <SectionTitle value="About" />
          {about.map((article, index) => (
            <p key={index} className={"my-4"}>
              {article}
            </p>
          ))}
        </article>
        <AuthorImage />
        <Accordion title="Education">
          <article className={"text-slate-200"}>
            <h2 className={"mt-4 font-bold text-xl text-slate-400"}>
              Education
            </h2>
            <ul>
              <li className={"my-2"}>
                <b>EDUCAnet</b>
                <ol className={"list-disc ml-4"}>
                  <li>High School (IT)</li>
                  <li>2017 - 2021</li>
                  <li>
                    multimedia (vector & raster graphics, video editing, SFX)
                  </li>
                  <li>
                    programming: html5, css3, javascript, php, mysql, java
                  </li>
                  <li>
                    hardware and basics of computer science
                  </li>
                </ol>
              </li>
              <li className={"my-2"}>
                <b>Jihočeská univerzita (ditched)</b>
                <ol className={"list-disc ml-4"}>
                  <li>computer science - bachelor's degree</li>
                  <li>
                    2022 - 2023
                  </li>

                  <li>
                    applications architecture. (mvp, mvc, mvvm...)
                  </li>
                  <li>
                    data structures and algorithms
                  </li>
                </ol>
              </li>
            </ul>
          </article>
        </Accordion>
        <Accordion title="Skills">
          <article>
            <h2 className={"mt-4 font-bold text-xl text-slate-400"}>
              Skills
            </h2>

            <h3 className={"my-2 font-bold"}>
              Programming languages
            </h3>
            <ul
              className={"flex items-center gap-2 my-2 font-mono flex-wrap"}
            >
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
            <ul
              className={"flex items-center gap-2 my-2 font-mono flex-wrap"}
            >
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
            <ul
              className={"flex items-center gap-2 my-2 font-mono flex-wrap"}
            >
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
        </Accordion>
      </main>
    </section>
  );
}
