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
  color: string;
  backgroundColor: string;
}

/** Array representing the programming languages, that the author knows */
export const languagesData: Skill[] = [
  {
    id: 0,
    value: "TypeScript",
    Icon: SiTypescript,
    backgroundColor: "#0078c9",
    color: "#fff",
  },
  {
    id: 1,
    value: "JavaScript",
    Icon: SiJavascript,
    backgroundColor: "#ebd64d",
    color: "#323230",
  },
  {
    id: 2,
    value: "Java (beginner)",
    Icon: FaJava,
    backgroundColor: "#ebd64d",
    color: "#323230",
  },
  {
    id: 3,
    value: "Lua",
    Icon: SiLua,
    backgroundColor: "#ebd64d",
    color: "#323230",
  },
];

/** Array representing the libraries and frameworks, that the author knows  */
export const libsData: Skill[] = [
  {
    id: 0,
    value: "React",
    Icon: FaReact,
    backgroundColor: "#222222",
    color: "#49d7fd",
  },
  {
    id: 1,
    value: "RTK",
    Icon: SiRedux,
    backgroundColor: "#323230",
    color: "#764abd",
  },
  {
    id: 2,
    value: "Node.js",
    Icon: FaNodeJs,
    backgroundColor: "#7eba00",
    color: "#fff",
  },
  {
    id: 3,
    value: "Tailwind",
    Icon: SiTailwindcss,
    backgroundColor: "#0b1120",
    color: "#38bdf8",
  },
  {
    id: 4,
    value: "Express.js",
    Icon: FaDirections,
    backgroundColor: "#333331",
    color: "#fff",
  },
  {
    id: 5,
    value: "Bootstrap",
    Icon: FaBootstrap,
    backgroundColor: "#333331",
    color: "#fff",
  },
  {
    id: 6,
    value: "Prisma",
    Icon: SiPrisma,
    backgroundColor: "#333331",
    color: "#fff",
  },
  {
    id: 7,
    value: "Yup",
    Icon: null,
    backgroundColor: "#333331",
    color: "#fff",
  },
];

/** Array representing the other skills, that the author knows */
export const furtherData: Skill[] = [
  {
    id: 0,
    value: "Bash",
    backgroundColor: "#000000",
    color: "#0F0",
  },
  {
    id: 1,
    value: "HTML5",
    Icon: FaHtml5,
    backgroundColor: "#e44d26",
    color: "#fff",
  },
  {
    id: 2,
    value: "CSS",
    Icon: FaCss3Alt,
    backgroundColor: "#264de4",
    color: "#fff",
  },
  {
    id: 4,
    value: "markdown",
    backgroundColor: "#DDD",
    color: "#222222",
  },
  { id: 3, value: "rest-api", backgroundColor: "#DDD", color: "#222222" },
  { id: 5, value: "sass", backgroundColor: "#cf649a", color: "#fff" },
  { id: 6, value: "git", backgroundColor: "#DDD", color: "#222222" },
  { id: 7, value: "mern-stack", backgroundColor: "#DDD", color: "#222222" },
  { id: 8, value: "Linux", backgroundColor: "#DDD", color: "#222222" },
  { id: 9, value: "yarn", backgroundColor: "#DDD", color: "#222222" },
  { id: 10, value: "deno", backgroundColor: "#DDD", color: "#222222" },
];
