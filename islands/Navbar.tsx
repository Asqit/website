import { useCallback, useEffect, useState } from "preact/hooks";
import { Brand, Hamburger, ThemeSwitcher } from "../components/index.ts";
import { useDarkMode } from "../hooks/useDarkMode.ts";

export default function Navbar() {
  const sectionIds: string[] = ["about", "skills", "projects", "contact"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, enable, disable } = useDarkMode();

  const toggleIsVisible = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const toggleDarkMode = useCallback(() => {
    if (isDarkMode) {
      disable();
      return;
    }

    enable();
  }, [isDarkMode]);

  const handleScroll = useCallback((_: Event) => {
    if (self.scrollY > 160) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [self.scrollY]);

  useEffect(() => {
    self.addEventListener("scroll", handleScroll, false);

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    return () => {
      self.removeEventListener("scroll", handleScroll);
    };
  }, [isDarkMode]);

  return (
    <header
      className={`fixed w-screen top-0 left-0 z-[999] transition-all ${
        isScrolled ? "dark:bg-black/40 bg-white/40" : "bg-transparent"
      } backdrop-blur-xl will-change-scroll max-h-20`}
    >
      <nav
        className={`container mx-auto will-change-scroll transition-all ${
          isScrolled ? "max-w-6xl" : "max-w-7xl"
        } flex items-center justify-between flex-wrap p-6`}
      >
        <Brand className="dark:text-white text-black" />
        <div className="md:hidden relative z-50">
          <Hamburger isOpen={isMenuOpen} onClick={toggleIsVisible} />
        </div>
        <ul
          className={`hidden basis-full md:basis-auto md:flex items-center gap-x-4`}
        >
          {sectionIds.map((link, index) => (
            <li
              key={link}
              className="font-mono capitalize hover:text-primary-0 dark:hover:text-primary-10"
            >
              <span className={"text-primary-0 dark:text-primary-10"}>
                {index}.
              </span>
              <a href={`/#${link}`}>{link}</a>
            </li>
          ))}
          <li className="font-mono capitalize hover:text-primary-0 dark:hover:text-primary-10">
            <span className={"text-primary-0 dark:text-primary-10"}>
              4.
            </span>
            <a href={`/job`}>Job Offers</a>
          </li>
          <li>
            <ThemeSwitcher
              isDarkMode={isDarkMode}
              toggleMode={toggleDarkMode}
            />
          </li>
        </ul>
        <div
          className={`${
            isMenuOpen ? "top-0 h-screen" : "-top-[1000%] max-h-0"
          } fixed left-0 w-full z-40 bg-black p-4 transition-all md:hidden`}
        >
          <div className="flex justify-between p-4">
            <Brand isDark={true} />
          </div>
          <ul
            className={"text-xl uppercase mt-4 flex flex-col gap-4 items-center justify-center"}
          >
            {sectionIds.map((l, i) => (
              <li key={l} onClick={toggleIsVisible} className="link">
                <a href={`#${l}`}>{l}</a>
              </li>
            ))}
            <li>
              <button
                className={"link"}
                onClick={isDarkMode ? enable : disable}
              >
                {isDarkMode ? "Light Theme" : "Dark Theme"}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
