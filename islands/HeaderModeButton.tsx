// CODE STOLEN FROM: https://github.com/denyncrawford/new-portfolio/blob/main/islands/Header.tsx#L13
// I couldn't get my useDarkMode hook to work without localStorage
// with which I had trouble getting to work
// I tried going with KV instead, but it gave me
// TypeError even thought I've used the stupid "--unstable" flag everywhere
// FUCKING BEAUTIFUL!!!

import { Signal } from "@preact/signals";
import { IS_BROWSER } from "$fresh/src/runtime/utils.ts";
import { JSX } from "preact/jsx-runtime";
import { Emoji } from "../components/index.ts";
import { updateSimpleProjectColorScheme } from "../utils/updateSimpleProjectColorScheme.ts";

interface DarkModeProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  prev: "light" | "dark";
  darkModeSignal: Signal<"light" | "dark" | null>;
}

export default function HeaderModeButton(props: DarkModeProps) {
  function updateMode() {
    const w = window as unknown as { isDark: boolean };
    w.isDark = localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[w.isDark ? "add" : "remove"]("dark");
    updateSimpleProjectColorScheme(w.isDark ? true : false);
  }

  const getMode = () => {
    if (!IS_BROWSER) {
      return props.prev;
    }

    updateMode();

    if (localStorage?.theme?.includes("dark")) {
      return "dark";
    }

    return "light";
  };

  props.darkModeSignal.value = getMode();

  const toggleTheme = () => {
    if (props.darkModeSignal.value === "dark") {
      props.darkModeSignal.value = "light";
      updateSimpleProjectColorScheme(false);
      localStorage.theme = props.darkModeSignal.value;
      updateMode();
      return;
    }

    props.darkModeSignal.value = "dark";
    updateSimpleProjectColorScheme(true);
    localStorage.theme = props.darkModeSignal.value;
    updateMode();
  };

  return (
    <div class="inline-flex">
      <button
        onClick={(e) => {
          props?.onClick?.(e);
          toggleTheme();
        }}
      >
        <Emoji
          symbol="🌙"
          label="dark theme"
          className={props.darkModeSignal.value !== "light"
            ? "hidden"
            : "block md:animate-fade-in-left"}
        />

        <Emoji
          symbol="☀️"
          label="light theme"
          className={props.darkModeSignal.value === "light"
            ? "hidden"
            : "block md:animate-fade-in-left"}
        />
      </button>
    </div>
  );
}
