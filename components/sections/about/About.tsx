import {
  backendTechnologies,
  frontendTechnologies,
  furtherTechSkills,
  programmingLanguages,
} from "../../../data/skills.ts";
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
            <h3 className={"my-2 font-bold"}>
              Programming Languages
            </h3>
            <ul
              className={"flex items-center gap-2 my-2 font-mono flex-wrap"}
            >
              {programmingLanguages.map((lang) => {
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
              Front-End
            </h3>
            <ul
              className={"flex items-center gap-2 my-2 font-mono flex-wrap"}
            >
              {frontendTechnologies.map((frontend) => {
                return (
                  <li key={frontend.id}>
                    <Chip className={"flex items-center gap-x-2"}>
                      {frontend.Icon ? <frontend.Icon /> : null}
                      {frontend.value}
                      <span className={"bg-background-10 px-1"}>
                        {frontend.level}
                      </span>
                    </Chip>
                  </li>
                );
              })}
            </ul>

            <h3 className={"my-2 font-bold"}>Back-End & DBs</h3>
            <ul
              className={"flex items-center gap-2 my-2 font-mono flex-wrap"}
            >
              {backendTechnologies.map((backend) => {
                return (
                  <li key={backend.id}>
                    <Chip className={"flex items-center gap-x-2"}>
                      {backend.Icon ? <backend.Icon /> : null}
                      {backend.value}
                      <span className={"bg-background-10 px-1"}>
                        {backend.level}
                      </span>
                    </Chip>
                  </li>
                );
              })}
            </ul>

            <h3 className={"my-2 font-bold"}>Other Tech. Skills</h3>
            <ul
              className={"flex items-center gap-2 my-2 font-mono flex-wrap"}
            >
              {furtherTechSkills.map((further) => {
                return (
                  <li key={further.id}>
                    <Chip className={"flex items-center gap-x-2"}>
                      {further.Icon ? <further.Icon /> : null}
                      {further.value}
                      <span className={"bg-background-10 px-1"}>
                        {further.level}
                      </span>
                    </Chip>
                  </li>
                );
              })}
            </ul>

            <p className={"float-right text-slate-500 my-2"}>
              Each skill has a knowledge level. Levels spans from 0 to 10
            </p>
          </article>
        </Accordion>
      </main>
    </section>
  );
}
