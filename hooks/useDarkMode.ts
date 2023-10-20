import { useEffect, useState } from "preact/hooks";

function updateSimpleProjectColorScheme(isDark: boolean): void {
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
    "rgb(150, 150, 150)"
  );
}

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const setLightTheme = () => {
    setIsDarkMode(false);
    updateSimpleProjectColorScheme(false);
    document.documentElement.classList.remove("dark");
  };

  const setDarkTheme = () => {
    setIsDarkMode(true);
    updateSimpleProjectColorScheme(true);
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
