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
      className={"bg-background-5 backdrop-blur-[200px] py-16 scroll-m-8"}
    >
      <main
        className={"container mx-auto max-w-7xl grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-16 items-center p-8 text-white font-sans"}
      >
        <AuthorImage />
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
      </main>
    </section>
  );
}
