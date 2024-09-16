import { AllValuesPresent } from "./type.index.ts";

const data: AllValuesPresent<
  ["default", "light", "dracula", "black", "retro"]
> = [
  "default",
  "light",
  "dracula",
  "black",
  "retro",
];

export const constants = {
  /** A toggle for JobBanner component indicating whenever I am interested in new jobs */
  isLookingForJob: false,

  themes: data,
};
