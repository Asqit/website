import { FaCode, FaGithubAlt } from "react-icons/fa";
import { Project } from "../../data/projects.ts";
import { Chip } from "../index.ts";

type SimpleProjectProps = Project & {};

export function SimpleProject(props: SimpleProjectProps) {
  const { title, tags, link, id, description } = props;

  const handleMouseMove = (e: any) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left + "px";
    const y = e.clientY - rect.top + "px";

    e.currentTarget.style.setProperty("--mouse-x", x);
    e.currentTarget.style.setProperty("--mouse-y", y);
  };

  return (
    <a
      href={link}
      target={"_blank"}
      onMouseMove={handleMouseMove}
      className={`rounded-lg relative bg-background-5 hover:before:opacity-100 group project`}
    >
      <div className={"project-border group-hover:opacity-100"} />
      <div
        className={"p-8 flex flex-col relative z-20 gap-2 w-[calc(100%-2px)] h-[calc(100%-2px)] m-[1px] rounded-[inherit] bg-background-10"}
      >
        <div className="flex justify-between items-center">
          <span className="text-2xl flex items-center gap-1">
            <FaCode />
            Project
          </span>
        </div>
        <article className="flex-grow">
          <h2 className="text-2xl md:text-4xl my-2 font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary-0 to-primary-10">
            {title}
          </h2>
          <p>{description}</p>
        </article>
        <div className={"flex flex-wrap gap-2"}>
          {tags.map((tag) => (
            <span
              className={"text-slate-500 lowercase font-mono"}
              key={tag}
              children={tag}
            />
          ))}
        </div>
      </div>
    </a>
  );
}
