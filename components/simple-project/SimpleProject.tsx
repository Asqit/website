import { FaCode, FaGithubAlt } from "react-icons/fa";
import { Chip } from "../index.ts";

export interface GitHubRepo {
  name: string;
  id: number;
  language: string;
  html_url: string;
  description: string;
  topics: string[];
  fork: boolean;
}

type SimpleProjectProps = GitHubRepo & {};

export function SimpleProject(props: SimpleProjectProps) {
  const { name, topics, html_url, description, language } = props;

  const handleMouseMove = (e: any) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left + "px";
    const y = e.clientY - rect.top + "px";

    e.currentTarget.style.setProperty("--mouse-x", x);
    e.currentTarget.style.setProperty("--mouse-y", y);
  };

  console.table(props);

  return (
    <a
      href={html_url}
      target={"_blank"}
      onMouseMove={handleMouseMove}
      className={`rounded-lg relative bg-background-5 hover:before:opacity-100 group project`}
    >
      <div className={"project-border group-hover:opacity-100"} />
      <div
        className={"p-8 flex flex-col relative z-20 gap-2 w-[calc(100%-2px)] h-[calc(100%-2px)] m-[1px] rounded-[inherit] bg-background-10"}
      >
        <div className="grid grid-cols-3">
          <span className="text-2xl flex items-center gap-1">
            <FaCode />
            Project
          </span>
        </div>
        <article className="flex-grow">
          <h2 className="text-2xl md:text-4xl my-2 font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary-0 to-primary-10">
            {name}
          </h2>
          {language
            ? (
              <h3 className={"text-slate-500 my-2"}>
                Made with: <code>{language}</code>
              </h3>
            )
            : null}
          <p>{description}</p>
        </article>
        <div className={"flex flex-wrap gap-2"}>
          {Array.isArray(topics)
            ? topics.map((tag) => <Chip key={tag} children={tag} />)
            : <p>none</p>}
        </div>
      </div>
    </a>
  );
}
