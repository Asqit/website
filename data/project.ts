import { GitHubRepo } from "../islands/SimpleProject.tsx";

const data: GitHubRepo[] = [
  {
    id: 5,
    name: "Backroads",
    language: "css",
    html_url: "https://github.com/asqit/backroads",
    description:
      "A landing page for fictional tour company. It is written in vanilla css, javascript as one of my earlier projects.",
    topics: ["css", "html", "javascript"],
    fork: false,
  },
  {
    id: 4,
    name: "Gnome-binary-wallpaper",
    language: "java",
    html_url: "https://github.com/asqit/gnome-binary-wallpaper",
    description:
      "Simple program written in Java with it's main purpose being the creation of dark & light wallpapers for linux environment gnome.",
    topics: ["java", "gnome", "linux"],
    fork: false,
  },
  {
    id: 2,
    name: "RTK-Todo",
    language: "typescript",
    html_url: "https://github.com/asqit/rtk-todo",
    description:
      "RTk-Todo is simple todo application written in typescript and todo state handled by Redux-Toolkit",
    topics: ["todo-app", "react", "RTK"],
    fork: false,
  },
  {
    id: 0,
    name: "fresh-project",
    language: "typescript",
    html_url:
      "https://dev.to/iasqiti/replacing-twind-with-tailwind-in-fresh-1j4d",
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
