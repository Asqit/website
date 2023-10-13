import { useEffect, useState } from "preact/hooks";

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const setLightTheme = () => {
    setIsDarkMode(false);
    document.documentElement.style.setProperty("--project-color", "rgba(2, 2, 2, 0.128)");
    document.documentElement.classList.remove("dark");
  };

  const setDarkTheme = () => {
    setIsDarkMode(true);
    document.documentElement.style.setProperty("--project-color", "rgba(255,255,255,0)");
    document.documentElement.classList.add("dark");
  };

  const setOsTheme = () => {
    localStorage.removeItem("theme");
    document.documentElement.classList.remove("dark");
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  }, []);

  return { isDarkMode, setDarkTheme, setLightTheme, setOsTheme };
}
