import { asset } from "$fresh/runtime.ts";
import { Project } from "../../data/projects.ts";
import { Chip } from "../index.ts";
import { SectionTitle } from "../section-title/SectionTitle.tsx";
import { FaGithub } from "react-icons/fa";

type SpecialProjectProps = Project & {
  isOdd: boolean;
};

export function SpecialProject(props: SpecialProjectProps) {
  const { title, tags, link, id, description, image, isOdd } = props;

  return (
    <div className={"grid grid-cols-12 items-center my-16 xl:my-32"}>
      <figure
        className={"row-start-1 row-end-1 relative z-10 col-start-1 col-end-13 rounded-md xl:col-start-1 xl:col-end-7"}
      >
        <a href={link} target="blank" className={"block"}>
          <img
            className={"rounded-md w-full h-full"}
            src={asset(image!)}
          />
        </a>
      </figure>
      <article
        className={"row-start-1 row-end-1 relative z-50 col-start-1 col-end-13 bg-background-0/95 h-full flex items-center rounded-md xl:col-start-7 xl:col-end-13 xl:bg-transparent"}
      >
        <div className={"p-10"}>
          <h3 className={"my-2 text-primary-10 capitalize"}>
            Special project
          </h3>
          <h2 className={"mb-2 font-black text-2xl"}>
            {title}
          </h2>
          <div
            className={"xl:bg-background-0 xl:border border-background-10 xl:p-4 rounded-md"}
          >
            <p>{description}</p>
          </div>
          <div className={"flex gap-2 flex-wrap my-2"}>
            {tags.map((tag) => <Chip key={tag} children={tag} />)}
          </div>
          <div className={"text-3xl text-primary-5 pl-2"}>
            <a href={link} target="_blank">
              <FaGithub />
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
