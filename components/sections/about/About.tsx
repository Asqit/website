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
import { asset } from "$fresh/runtime.ts";
import { FaPaperclip } from "react-icons/fa";

export function About() {
  return (
    <section
      id="about"
      className={"bg-background-5 backdrop-blur-[200px] py-8"}
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
          <a
            target="blank"
            rel="author"
            href={asset("docs/cv.pdf")}
            className={"btn primary px-8 inline-flex gap-x-2 items-center capitalize"}
          >
            <FaPaperclip />
            <span>Get CV</span>
          </a>
          <a
            target="blank"
            rel="author"
            referrerpolicy={"no-referrer"}
            href={"https://www.github.com/asqit"}
            className={"btn ml-4 primary outlined px-8 inline-flex gap-x-2 items-center capitalize"}
          >
            GitHub
          </a>
        </article>
        <AuthorImage />
        <Accordion title="Skills" aria-label={"Skills"} aria-controls={""}>
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
