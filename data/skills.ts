// Icons ----------------------------------------------->
import {
  FaBootstrap,
  FaDirections,
  FaLinux,
  FaNodeJs,
  FaReact,
  FaWrench,
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
  SiSass,
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
}

export const programmingLanguages: Skill[] = [
  { id: 0, value: "Bash", Icon: SiGnubash },
  { id: 1, value: "TypeScript", Icon: SiTypescript },
  { id: 2, value: "JavaScript", Icon: SiJavascript },
  { id: 3, value: "Rust", Icon: SiRust },
];

export const frontendTechnologies: Skill[] = [
  { id: 0, value: "HTML", Icon: SiHtml5 },
  { id: 1, value: "CSS", Icon: SiCss3 },
  { id: 3, value: "Tailwind", Icon: SiTailwindcss },
  { id: 2, value: "Bootstrap", Icon: FaBootstrap },
  { id: 3, value: "React", Icon: FaReact },
  { id: 4, value: "RTK", Icon: SiRedux },
  { id: 5, value: "Sass", Icon: SiSass },
];

export const backendTechnologies: Skill[] = [
  { id: 0, value: "Node.js", Icon: FaNodeJs },
  { id: 1, value: "Express.js", Icon: FaDirections },
  { id: 2, value: "Prisma", Icon: SiPrisma },
  { id: 3, value: "MySQL", Icon: SiMariadb },
  { id: 4, value: "MongoDB", Icon: SiMongodb },
];

export const furtherTechSkills: Skill[] = [
  { id: 0, value: "Git", Icon: SiGit },
  { id: 1, value: "Linux", Icon: FaLinux },
  { id: 2, value: "Deno", Icon: SiDeno },
  { id: 3, value: "Yarn", Icon: FaYarn },
  { id: 4, value: "PC Service", Icon: FaWrench },
];
