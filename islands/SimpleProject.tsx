import { FaCode } from "react-icons/fa";
import { Chip } from "../components/index.ts";
import { JSX } from "preact/jsx-runtime";
import { useCallback } from "preact/hooks";

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

export default function SimpleProject(props: SimpleProjectProps) {
  const { name, topics, html_url, description } = props;

  const handleMouseMove = useCallback(
    (e: JSX.TargetedMouseEvent<HTMLAnchorElement>) => {
      const { currentTarget: target } = e;
      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left + "px";
      const y = e.clientY - rect.top + "px";

      e.currentTarget.style.setProperty("--mouse-x", x);
      e.currentTarget.style.setProperty("--mouse-y", y);
    },
    [],
  );

  return (
    <a
      href={html_url}
      target={"_blank"}
      onMouseMove={handleMouseMove}
      className={`rounded-lg relative overflow-hidden hover:before:opacity-100 group project max-w-xs flex-shrink-0 snap-center md:max-w-[initial] md:flex-initial`}
      aria-roledescription={"button"}
    >
      <div className={"project-border group-hover:opacity-100"} />
      <div
        className={"p-8 flex flex-col relative z-20 gap-2 w-[calc(100%-2px)] h-[calc(100%-2px)] m-[1px] rounded-[inherit] bg-background-10 dark:bg-background-10-dark"}
      >
        <div>
          <span className="text-2xl flex items-center gap-1">
            <FaCode />
            Project
          </span>
        </div>
        <article className="flex-grow">
          <h2 className="text-2xl md:text-4xl font-bold text-primary-0 dark:text-primary-10 my-2 capitalize">
            {name}
          </h2>
          <p className={"my-2"}>{description}</p>
        </article>
        {topics.length > 0 ? <hr className={"border-slate-700 my-2"} /> : null}
        <div className={"flex flex-wrap-nowrap gap-2 my-2"}>
          {/* Limit array length to 3 */}
          {Array.isArray(topics)
            ? topics.map((t) => {
              if (t.length <= 10) return t;
            }).filter((t) => t && t).slice(0, 3).map((
              tag,
            ) => (
              <Chip
                key={tag}
                children={<>{tag}</>}
              />
            ))
            : <p>none</p>}
        </div>
      </div>
    </a>
  );
}
