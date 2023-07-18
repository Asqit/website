// Icons ----------------------------------------------->
import {
  FaBootstrap,
  FaDirections,
  FaLinux,
  FaNodeJs,
  FaReact,
  FaYarn,
} from "react-icons/fa";
import {
  SiCss3,
  SiDeno,
  SiGit,
  SiGnubash,
  SiHtml5,
  SiJava,
  SiJavascript,
  SiLua,
  SiMariadb,
  SiMongodb,
  SiPrisma,
  SiRedux,
  SiRust,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

// Typing -------------------------------------------->
import { IconBaseProps } from "https://deno.land/x/react_icons@0.2.3/lib/mod.tsx";
import { JSX } from "preact/jsx-runtime";

/** Interface representing each individual skill shown on the final website */
interface Skill {
  id: number;
  value: string;
  Icon?: (props: IconBaseProps) => JSX.Element;
  level: number;
}

export const programmingLanguages: Skill[] = [
  { id: 0, value: "Bash", Icon: SiGnubash, level: 3 },
  { id: 1, value: "TypeScript", Icon: SiTypescript, level: 7 },
  { id: 2, value: "JavaScript", Icon: SiJavascript, level: 8 },
  { id: 3, value: "Rust", Icon: SiRust, level: 4 },
  { id: 4, value: "Java", Icon: SiJava, level: 3 },
  { id: 5, value: "Lua", Icon: SiLua, level: 3 },
];

export const frontendTechnologies: Skill[] = [
  { id: 0, value: "HTML", Icon: SiHtml5, level: 7 },
  { id: 1, value: "CSS", Icon: SiCss3, level: 6 },
  { id: 3, value: "Tailwind", Icon: SiTailwindcss, level: 8 },
  { id: 2, value: "Bootstrap", Icon: FaBootstrap, level: 3 },
  { id: 3, value: "React", Icon: FaReact, level: 8 },
  { id: 4, value: "RTK", Icon: SiRedux, level: 7 },
];

export const backendTechnologies: Skill[] = [
  { id: 0, value: "Node.js", Icon: FaNodeJs, level: 7 },
  { id: 1, value: "Express.js", Icon: FaDirections, level: 8 },
  { id: 2, value: "Prisma", Icon: SiPrisma, level: 7 },
  { id: 3, value: "MySQL", Icon: SiMariadb, level: 4 },
  { id: 4, value: "MongoDB", Icon: SiMongodb, level: 5 },
];

export const furtherTechSkills: Skill[] = [
  { id: 0, value: "Git", Icon: SiGit, level: 4 },
  { id: 1, value: "Linux", Icon: FaLinux, level: 6 },
  { id: 2, value: "Deno", Icon: SiDeno, level: 4 },
  { id: 3, value: "Yarn", Icon: FaYarn, level: 7 },
];
