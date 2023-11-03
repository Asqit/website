import { useEffect, useState } from "preact/hooks";
import { useMediaQuery } from "./useMediaQuery.ts";
import { updateSimpleProjectColorScheme } from "../utils/updateSimpleProjectColorScheme.ts";
import { useLocalStorage } from "./useLocalStorage.ts";

interface UseDarkModeOutput {
  isDarkMode: boolean;
  toggle: () => void;
  enable: () => void;
  disable: () => void;
}

/**
 * A hook that will match your OS preferred theme and change it if required by the user
 * @param defaultValue if available, will be used as initial value for the theme. (`true` = dark, `false` = light)
 */
export function useDarkMode(defaultValue?: boolean): UseDarkModeOutput {
  const isDarkOS = useMediaQuery("(prefers-color-scheme: dark)");
  const [isDarkMode, setIsDarkMode] = localStorage
    ? useLocalStorage<boolean>(
        "asqit.deno.dev/dark-mode",
        defaultValue ?? isDarkOS ?? false
      )
    : useState(defaultValue ?? isDarkOS ?? false);

  useEffect(() => {
    setIsDarkMode(isDarkOS);
  }, [isDarkOS]);

  return {
    isDarkMode,
    toggle: () =>
      setIsDarkMode((prev: boolean) => {
        updateSimpleProjectColorScheme(!prev);
        return !prev;
      }),
    enable: () => {
      setIsDarkMode(true);
      updateSimpleProjectColorScheme(true);
    },
    disable: () => {
      setIsDarkMode(false);
      updateSimpleProjectColorScheme(false);
    },
  };
}
