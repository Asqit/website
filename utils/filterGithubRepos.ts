import { shuffleArray } from "./shuffleArray.ts";
import { GitHubRepository } from "./type.index.ts";

/**
 * function, that returns github repositories, that are filtered so that not a single highlighted-project is featured.
 * @param repos response from `api.github.com`
 * @returns filtered github response
 */
export function filterGithubRepos(repos: GitHubRepository[]) {
  const shuffled = shuffleArray(repos);

  const specialProjects: number[] = [
    640819119,
    614342453,
    683675699,
  ];

  return shuffled.filter((project) => {
    if (project.fork === true) {
      return;
    }

    if (specialProjects.includes(project.id)) {
      return;
    }

    return project;
  }).slice(0, 6);
}
