// Theoretically I could use api.github to fetch repo details about every project
// but I prefer this way

export type Project = {
  id: number;
  title: string;
  tags: string[];
  description: string;
  link: string;
  image?: string;
};

export const projectsData: Project[] = [
  {
    id: 0,
    title: "Spacelads",
    tags: ["HTML", "Sass", "JavaScript"],
    link: "https://www.github.com/asqit/spacelads",
    description:
      "Spacelads is a retro-styled space shooter game made as a learning and graduation project in my high school days. The code base is complete spaghetti code, but it really helped me grasp javascript and few programming concepts.",
  },
  {
    id: 1,
    title: "BackRoads",
    tags: ["HTML", "Sass", "JavaScript", "Font-awesome"],
    link: "https://www.github.com/asqit/backroads",
    description:
      "Fictional tour company website made for learning purposes. It is one of many websites, that I have created when learning HTML and CSS.",
  },
  {
    id: 2,
    title: "Notes-app",
    tags: ["React", "TypeScript", "markdown", "bootstrap"],
    link: "https://github.com/Asqit/notes-app",
    description:
      "Notebook application written with TypeScript with help of react and styled via bootstrap and it's react variation. Application supports filtering via tags, rendering markdowns. It also persist data via localStorage.",
  },
  {
    id: 3,
    title: "Momentify",
    image: "momentify.png",
    tags: ["React", "Tailwind CSS", "TypeScript", "MongoDB", "Express"],
    description:
      "Momentify is a MERN stack social application in which users are able to create and share posts of their experiences. You can take like cut-down instagram.",
    link: "https://github.com/Asqit/momentify",
  },
  {
    id: 4,
    title: "Portfolio",
    tags: ["React", "TypeScript", "i18next", "tailwind css"],
    link: "https://github.com/Asqit/website",
    description:
      "My portfolio website with many iterations. Each iteration is made with different technologies.",
    image: "portfolio.png",
  },
];
