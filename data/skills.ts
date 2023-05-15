import {
  FaBootstrap,
  FaCss3Alt,
  FaDirections,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiJavascript,
  SiLua,
  SiPrisma,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

interface Skill {
  id: number;
  value: string;
  Icon?: any;
  level: number;
}

/** Array representing the programming languages, that the author knows */
export const languagesData: Skill[] = [
  {
    id: 0,
    value: "TypeScript",
    Icon: SiTypescript,
    level: 8,
  },
  {
    id: 1,
    value: "JavaScript",
    Icon: SiJavascript,
    level: 9,
  },
  {
    id: 2,
    value: "Java",
    Icon: FaJava,
    level: 5,
  },
  {
    id: 3,
    value: "Lua",
    Icon: SiLua,
    level: 5,
  },
];

/** Array representing the libraries and frameworks, that the author knows  */
export const libsData: Skill[] = [
  {
    id: 0,
    value: "React",
    Icon: FaReact,
    level: 8,
  },
  {
    id: 1,
    value: "RTK",
    Icon: SiRedux,
    level: 7,
  },
  {
    id: 2,
    value: "Node.js",
    Icon: FaNodeJs,
    level: 7,
  },
  {
    id: 3,
    value: "Tailwind",
    Icon: SiTailwindcss,
    level: 8,
  },
  {
    id: 4,
    value: "Express.js",
    Icon: FaDirections,
    level: 8,
  },
  {
    id: 5,
    value: "Bootstrap",
    Icon: FaBootstrap,
    level: 4,
  },
  {
    id: 6,
    value: "Prisma",
    Icon: SiPrisma,
    level: 7,
  },
  {
    id: 7,
    value: "Yup",
    Icon: null,
    level: 8,
  },
];

/** Array representing the other skills, that the author knows */
export const furtherData: Skill[] = [
  {
    id: 0,
    value: "Bash",
    level: 7,
  },
  {
    id: 1,
    value: "HTML5",
    Icon: FaHtml5,
    level: 9,
  },
  {
    id: 2,
    value: "CSS",
    Icon: FaCss3Alt,
    level: 7,
  },
  {
    id: 4,
    value: "markdown",
    level: 10,
  },
  { id: 3, value: "rest-api", level: 6 },
  { id: 5, value: "sass", level: 6 },
  { id: 6, value: "git", level: 3 },
  { id: 7, value: "mern-stack", level: 5 },
  { id: 8, value: "Linux", level: 7 },
  { id: 9, value: "yarn", level: 8 },
  { id: 10, value: "deno", level: 2 },
];
