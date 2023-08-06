import { GitHubRepo } from "../islands/SimpleProject.tsx";

let data: GitHubRepo[] = [
  {
    id: 5,
    name: "Website",
    language: "typescript",
    html_url: "https://github.com/asqit/website",
    description:
      "Current iteration of my portfolio website. Currently, it's fast and beautiful SSG website, that you are currently viewing.",
    topics: ["typescript", "fresh", "deno", "tailwind css"],
    fork: false,
  },
  {
    id: 0,
    name: "Asteroids",
    language: "typescript",
    html_url: "https://github.com/asqit/asteroids",
    description:
      'My turn on the classic atari game called "Asteroids". You play as a small spaceship equipped with laser guns and your objective is to destroy as many aliens and asteroids as you can.',
    topics: ["atari", "typescript", "retro-gaming"],
    fork: false,
  },
  {
    id: 2,
    name: "RTK-Todo",
    language: "typescript",
    html_url: "https://github.com/asqit/rtk-todo",
    description:
      "RTk-Todo is simple todo application written in typescript and todo state handled by Redux-Toolkit",
    topics: ["todoapp", "react", "redux-toolkit"],
    fork: false,
  },
  {
    id: 4,
    name: "fresh-project",
    language: "typescript",
    html_url: "https://github.com/asqit/fresh-project",
    description:
      "Template for starting a new fresh project styled by the regular tailwind css. You can find more information on my dev.to article. (See it for yourself under my profile at dev.to)",
    topics: ["deno", "fresh", "typescript"],
    fork: false,
  },
  {
    id: 3,
    name: "SpaceLads",
    language: "javascript",
    html_url: "https://github.com/Asqit/SpaceLads/releases/tag/1.0.0",
    description:
      "Project, that served my as graduation work and my big project for learning javascript. You play as small spaceship and your goal is to survive as long as you can while shooting aliens.",
    topics: ["js", "gaming"],
    fork: false,
  },
  {
    id: 1,
    name: "Notes-app",
    language: "javascript",
    html_url: "https://github.com/Asqit/notes-app",
    description:
      "Notebook application written in TypeScript with bootstrap and react. It supports filtering via tags and markdown syntax",
    topics: ["typescript", "markdown", "react"],
    fork: false,
  },
];

export const projects = data.sort((a, b) => a.id - b.id);
