import { FC } from "react";
import { skillsData } from "./data";
import { useTranslation } from "react-i18next";

interface ISkillProps {
  Icon?: FC;
  value: string;
  color: string;
  backgroundColor: string;
}

function Skill(props: ISkillProps) {
  const { value, color, backgroundColor, Icon } = props;

  return (
    <article
      style={{ backgroundColor, color }}
      className={`rounded-md flex items-center px-4 py-2 gap-x-2 text-xl`}
    >
      {Icon ? <Icon /> : null}
      <span className="lowercase">
        {"#"}
        {value}
      </span>
    </article>
  );
}

export default function Knowledge() {
  const { t } = useTranslation();
  return (
    <section className="p-4 md:p-16 md:py-32 bg-bg10">
      <div className="mb-8 md:mb-12">
        <h2 className="text-center text-5xl md:text-6xl font-bold my-2">
          {t("knowledge")}
        </h2>
        <div className="mx-auto w-[75%] md:w-[200px] h-2 rounded-xl bg-primary10" />
      </div>
      <div className="max-w-3xl flex items-center justify-center flex-wrap mb-8 gap-2 mx-auto">
        {skillsData.map((skill) => {
          return <Skill key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
}
