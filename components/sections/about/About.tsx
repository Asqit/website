import AuthorImage from "../../common/author-image/AuthorImage.tsx";
import { SectionTitle } from "../../common/section-title/SectionTitle.tsx";
import { about } from "../../../utils/about.ts";
import { asset } from "$fresh/runtime.ts";
import { FaPaperclip } from "react-icons/fa";
import { JobBanner } from "../../index.ts";
import { Translation } from "../../../routes/_middleware.tsx";

interface AboutProps {
  lang: Translation["about"];
}

export function About({ lang }: AboutProps) {
  return (
    <section
      id="about"
      className={"py-16 scroll-m-8"}
    >
      <main
        className={"container mx-auto max-w-6xl grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-16 items-center p-8 font-sans"}
      >
        <AuthorImage />
        <article>
          <SectionTitle value={lang.title} />
          <JobBanner isLookingForJob={true} />
          <p
            className={`my-4`}
          >
            {lang.paragraph_1}
          </p>
          <p
            className={`my-4`}
          >
            {lang.paragraph_2}
          </p>
          <p
            className={`my-4`}
          >
            {lang.paragraph_3}
          </p>
          <p
            className={`my-4`}
          >
            {lang.paragraph_4}
          </p>
          <p
            className={`my-4`}
          >
            {lang.paragraph_5}
          </p>

          <div className={"mt-4"}>
            <a
              target="blank"
              rel="author"
              href={asset("docs/cv.pdf")}
              className={"btn primary px-8 inline-flex gap-x-2 items-center capitalize"}
            >
              <FaPaperclip />
              <span>{lang.cv_button}</span>
            </a>
            <a
              target="blank"
              rel="author"
              referrerpolicy={"no-referrer"}
              href={"https://www.github.com/asqit"}
              className={"btn ml-4 px-8 inline-flex font-semibold text-primary-0 dark:text-primary-10 gap-x-2 items-center capitalize bg-transparent hover:bg-transparent active:bg-transparent border-2 border-primary-0 dark:border-primary-10"}
            >
              GitHub
            </a>
          </div>
        </article>
      </main>
    </section>
  );
}
