import { JSX } from "preact/jsx-runtime";
import { Translation } from "../routes/_middleware.tsx";

// represents a skill or a development tool on Skills section
export interface Skill {
  id: number;
  value: string;
  Icon: (_: any) => JSX.Element;
}

// represents a full api.github.com response
export interface GitHubRepository extends GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  url: string;
  description: string;
  language: string;
  html_url: string;
  topics: string[];
  visibility: boolean;
  fork: boolean;
}

// represents a simplified api.github.com response
export interface GitHubRepo {
  name: string;
  id: number;
  language: string;
  html_url: string;
  description: string;
  topics: string[];
  fork: boolean;
}

// represents a state for language setting for the entire app
export type LanguageState = {
  lang: "en" | "cs";
  translation: Translation;
};
