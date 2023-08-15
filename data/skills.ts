import { JSX } from "preact/jsx-runtime";
import { FaGlobe, FaSitemap } from "react-icons/fa";
import {
  SiCss3,
  SiExpress,
  SiGnubash,
  SiHtml5,
  SiJava,
  SiJavascript,
  SiMariadb,
  SiMongodb,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

interface Skill {
  id: number;
  value: string;
  Icon: (_: any) => JSX.Element;
}

const languages: Skill[] = [
  {
    id: 0,
    value: "TypeScript",
    Icon: SiTypescript,
  },
  {
    id: 1,
    value: "JavaScript",
    Icon: SiJavascript,
  },
  {
    id: 2,
    value: "BASH",
    Icon: SiGnubash,
  },
  {
    id: 3,
    value: "Java",
    Icon: SiJava,
  },
];

const frontEnd: Skill[] = [
  {
    id: 0,
    value: "HTML",
    Icon: SiHtml5,
  },
  {
    id: 1,
    value: "CSS",
    Icon: SiCss3,
  },
  {
    id: 2,
    value: "SASS",
    Icon: SiSass,
  },
  {
    id: 3,
    value: "Tailwind",
    Icon: SiTailwindcss,
  },
  {
    id: 4,
    value: "React",
    Icon: SiReact,
  },
  {
    id: 6,
    value: "Preact (3kb)",
    Icon: SiReact,
  },
  {
    id: 7,
    value: "Redux (toolkit)",
    Icon: SiRedux,
  },
  {
    id: 8,
    value: "i18n",
    Icon: FaGlobe,
  },
];

const backEnd: Skill[] = [
  {
    id: 0,
    value: "Node.js",
    Icon: SiNodedotjs,
  },
  {
    id: 1,
    value: "Express.js",
    Icon: SiExpress,
  },
  {
    id: 2,
    value: "Prisma ORM",
    Icon: SiPrisma,
  },
  {
    id: 3,
    value: "RESTFul API",
    Icon: FaSitemap,
  },
  {
    id: 4,
    value: "MySQL",
    Icon: SiMariadb,
  },
  {
    id: 5,
    value: "Mongo",
    Icon: SiMongodb,
  },
];

export const skills = { languages, frontEnd, backEnd };
