import { FaGithubAlt, FaInfo } from "react-icons/fa";
import { asset } from "https://deno.land/x/fresh@1.1.5/runtime.ts";
import LazyImage from "./LazyImage.tsx";
import Slideshow from "./SlideShow.tsx";

interface HighlightedProjectProps {
  githubLink: string;
  releaseLink: string;
  imageSrc: string | string[];
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
      className={"bg-background-5 p-4 rounded-md md:bg-transparent md:grid md:grid-cols-3 md:gap-4 md:items-center"}
    >
      <figure className={"md:col-span-2"}>
        {Array.isArray(imageSrc)
          ? <Slideshow images={imageSrc} />
          : <LazyImage src={asset(imageSrc)} />}
      </figure>
      <section
        className={`text-center ${
          isEven ? "order-first md:text-left" : "order-last md:text-right"
        } text-slate-300`}
      >
        <header className={"my-4"}>
          <h3 className={"text-primary-5 font-mono"}>Featured Project</h3>
          <h2 className={"font-bold text-xl"}>{title}</h2>
        </header>
        <main
          className={"my-4 md:bg-background-10 md:p-4 md:rounded-md md:border-t-2 md:border-t-slate-700 md:border-b-2 md:border-b-slate-950"}
        >
          <p>{description}</p>
        </main>
        <footer className={"my-4"}>
          <div>
            {tags.map((tag) => (
              <span key={tag} className={"font-mono text-slate-500 mr-1"}>
                {tag}
              </span>
            ))}
          </div>
          <div className={"inline-flex gap-x-2 my-4 text-xl"}>
            <a
              href={githubLink}
              referrerpolicy={"no-referrer"}
              target={"_blank"}
            >
              <FaGithubAlt />
            </a>
            <a
              href={releaseLink}
              referrerpolicy={"no-referrer"}
              target={"_blank"}
            >
              <FaInfo />
            </a>
          </div>
        </footer>
      </section>
    </article>
  );
}
