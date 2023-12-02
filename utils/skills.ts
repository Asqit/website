import { FaGlobe, FaLemon, FaSitemap } from "react-icons/fa";
import {
  SiCss3,
  SiDeno,
  SiExpress,
  SiGit,
  SiGnubash,
  SiGo,
  SiHtml5,
  SiInsomnia,
  SiIntellijidea,
  SiJavascript,
  SiJsonwebtokens,
  SiLinux,
  SiMariadb,
  SiMongodb,
  SiNodedotjs,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVim,
  SiVisualstudiocode,
  SiYarn,
} from "react-icons/si";
import { Skill } from "./type.index.ts";

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
    value: "Python",
    Icon: SiPython,
  },
  {
    id: 3,
    value: "BASH",
    Icon: SiGnubash,
  },
  {
    id: 4,
    value: "Go",
    Icon: SiGo,
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
  {
    id: 9,
    value: "Fresh",
    Icon: FaLemon,
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
  {
    id: 6,
    value: "JWT",
    Icon: SiJsonwebtokens,
  },
  {
    id: 7,
    value: "Deno",
    Icon: SiDeno,
  },
];

export const tools: Skill[] = [
  {
    id: 0,
    value: "VSCodium",
    Icon: SiVisualstudiocode,
  },
  {
    id: 1,
    value: "NeoVim",
    Icon: SiVim,
  },
  {
    id: 2,
    value: "Linux",
    Icon: SiLinux,
  },
  {
    id: 3,
    value: "Insomnia",
    Icon: SiInsomnia,
  },
  {
    id: 4,
    value: "Git",
    Icon: SiGit,
  },
  {
    id: 5,
    value: "Yarn",
    Icon: SiYarn,
  },
  {
    id: 6,
    value: "InteliJ Idea",
    Icon: SiIntellijidea,
  },
];

export const skills = { languages, frontEnd, backEnd, tools };
