import { GitHubRepository } from "./type.index.ts";

/**
 * Shuffles array in place. ES6 version
 * @param {Array} array items An array containing the items.
 */
export function shuffleArray<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/**
 * function, that returns github repositories, that are filtered so that not a single highlighted-project is featured.
 * @param repos response from `api.github.com`
 * @returns filtered github response
 */
export function filterGithubRepos(repos: GitHubRepository[]) {
  const shuffled = shuffleArray(repos);

  const specialProjects: number[] = [640819119, 614342453, 683675699];

  return shuffled
    .filter((project) => {
      if (project.fork === true) {
        return;
      }

      if (specialProjects.includes(project.id)) {
        return;
      }

      return project;
    })
    .slice(0, 6);
}

/**
 * function for toggling color-scheme for projects section.
 * @param isDark
 */
export function updateProjectScheme(isDark: boolean): void {
  if (isDark) {
    document.documentElement.style.setProperty(
      "--project-color",
      "rgba(255,255,255,0)"
    );
    return;
  }

  document.documentElement.style.setProperty(
    "--project-color",
    "rgba(225, 225, 225, 0.5)"
  );

  document.documentElement.style.setProperty(
    "--project-border",
    "rgb(120, 120, 120)"
  );
}
