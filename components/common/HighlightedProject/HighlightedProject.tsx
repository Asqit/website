import {
  FaArrowCircleRight,
  FaArrowRight,
  FaGithubAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { asset } from "$fresh/runtime.ts";

interface HighlightedProjectProps {
  githubLink: string;
  releaseLink: string;
  imageSrc: string;
  title: string;
  description: string;
  tags: string[];
  isEven?: boolean;
}

export default function HighlightedProject(props: HighlightedProjectProps) {
  const {
    githubLink,
    releaseLink,
    imageSrc,
    title,
    description,
    tags,
    isEven,
  } = props;

  return (
    <article
      className={"bg-background-10 p-4 rounded-md md:bg-transparent md:grid md:grid-cols-3 md:gap-4 md:items-center"}
    >
      <figure
        className={"md:col-span-2 md:bg-primary-10/40 group overflow-hidden"}
      >
        <a
          href={releaseLink}
          target={"_blank"}
          referrerpolicy={"no-referrer"}
          aria-label={`A link to project: "${title}"`}
          title={title}
        >
          <img
            loading="lazy"
            src={asset(imageSrc)}
            /* Fallback image: srcset={asset(imageSrc)} */
            alt={title}
            width={600}
            height={337}
            className={"w-full md:opacity-50 md:group-hover:opacity-100 md:group-hover:scale-100 md:scale-125 md:transition-all md:duration-300"}
          />
        </a>
      </figure>
      <section
        className={`text-center ${
          isEven ? "order-first md:text-left" : "order-last md:text-right"
        }`}
      >
        <header className={"my-4"}>
          <h2 className={"text-primary-0 dark:text-primary-10 font-mono"}>
            Featured Project
          </h2>
          <h3 className={"font-bold text-3xl"}>{title}</h3>
        </header>
        <main
          className={`my-4 md:relative md:w-[120%] md:z-10 ${
            isEven ? "md:left-[0%]" : "md:right-[20%]"
          }  md:bg-background-10 md:dark:bg-background-10-dark md:border md:border-background-0 md:dark:border-background-0-dark md:p-4 md:py-8`}
        >
          <p>{description}</p>
        </main>
        <footer className={"my-4"}>
          <div>
            {tags.map((tag, i) => (
              <span
                key={tag}
                className={"font-mono text-slate-600 dark:text-slate-300 mr-2 font-bold"}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className={"inline-flex gap-x-2 my-4 text-xl"}>
            <a
              href={releaseLink}
              referrerpolicy={"no-referrer"}
              target={"_blank"}
              className={"order-last"}
              title={`${title}'s website`}
            >
              <FaArrowCircleRight />
            </a>
            <a
              href={githubLink}
              referrerpolicy={"no-referrer"}
              target={"_blank"}
              title={`${title}'s source code`}
            >
              <FaGithubAlt />
            </a>
          </div>
        </footer>
      </section>
    </article>
  );
}
