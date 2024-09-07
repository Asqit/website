import { AllValuesPresent } from "./type.index.ts";

const data: AllValuesPresent<
  ["default", "cyberpunk", "dracula", "black", "corporate", "retro"]
> = [
  "default",
  "cyberpunk",
  "dracula",
  "black",
  "corporate",
  "retro",
];

export const constants = {
  /** A toggle for JobBanner component indicating whenever I am interested in new jobs */
  isLookingForJob: false,

  themes: data,
};
