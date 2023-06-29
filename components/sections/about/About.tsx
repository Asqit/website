import { furtherData, languagesData, libsData } from "../../../data/skills.ts";
import AuthorImage from "../../common/author-image/AuthorImage.tsx";
import { SectionTitle } from "../../common/section-title/SectionTitle.tsx";
import { Accordion, Chip } from "../../index.ts";

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
          <p className={"my-4"}>
            Hello, I'm a young (21) junior full-stack web developer from the
            Czech Republic. I have a deep passion for the computer world, cars,
            and historical facts.
          </p>
          <p className={"my-4"}>
            My journey in the field of IT began when I was around 10 years old,
            after receiving my very first computer. Since then, I have been
            tinkering with it and constantly expanding my knowledge of how
            computers work. In 2017, I enrolled in high school with a primary
            focus on providing me with a solid foundation for a career in IT.
          </p>
          <p>
            Initially, I doubted my abilities in the IT field, mainly due to my
            struggles with mathematics, which had always been my arch-nemesis.
            However, with time, I managed to overcome this challenge. Thanks to
            distance education, I no longer felt embarrassed about giving wrong
            answers, and I even discovered that I found topics like vectors and
            combinatorics quite enjoyable.
          </p>
          <p className={"my-4"}>
            Currently, I reside in a small district town with a population of
            approximately 100,000 people. It's an old city located near the
            borders of Austria and Germany. While it is my hometown, I aspire to
            move to a larger city, preferably a global metropolis. I am fluent
            in Czech, possess an English proficiency level of B2, and I am
            currently in the process of learning German.
          </p>
        </article>
        <AuthorImage />
        <Accordion title="Education">
          <article className={"text-slate-200"}>
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
                    - Programming in: HTML5, CSS3, JavaScript, PHP, MySQL, Java
                  </li>
                  <li>
                    - Hardware and basics of computer science
                  </li>
                </ol>
              </li>
              <li className={"my-2"}>
                <b>Jihočeská univerzita (ditched)</b>
                <ol>
                  <li>Comp. science - Bachelor's Degree</li>
                  <li>
                    2022 - 2023
                  </li>

                  <li>
                    - Applications architecture. (MVP, MVC, MVVM...)
                  </li>
                  <li>
                    - Data Structures and algorithms
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
