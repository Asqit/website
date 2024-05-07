import { useCallback, useEffect, useState } from "preact/hooks";
import { Brand, Hamburger } from "../components/index.ts";
import { Signal } from "@preact/signals";
import Language from "./Language.tsx";
import { Translation } from "../routes/_middleware.tsx";
import { LanguageState } from "../utils/type.index.ts";
import HeaderModeButton from "./HeaderModeButton.tsx";

interface NavbarProps {
  darkModeSignal: Signal<"light" | "dark">;
  lang: LanguageState["lang"];
  translation: Translation["navbar"];
}

export default function Navbar(
  { darkModeSignal, lang, translation }: NavbarProps,
) {
  const sectionIds: string[] = ["about", "skills", "projects", "contact"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const typedTranslation = translation as Record<
    string,
    { title: string; hyperlink: string }
  >;

  const toggleIsVisible = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleScroll = useCallback((_: Event) => {
    if (self.scrollY > 160) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [self.scrollY]);

  useEffect(() => {
    self.addEventListener("scroll", handleScroll, false);
    return () => {
      self.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-screen top-0 left-0 z-[1200] transition-all ${
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
              <a href={`#${typedTranslation[index.toString()]?.hyperlink}`}>
                {typedTranslation[index.toString()]?.title}
              </a>
            </li>
          ))}

          {/* SPECIAL LIST ITEMS */}
          <li>
            <HeaderModeButton
              darkModeSignal={darkModeSignal}
              prev={"light"}
            />
          </li>
          <li>
            <Language lang={lang} />
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
            {sectionIds.map((link, index) => (
              <li key={link} onClick={toggleIsVisible} className="link">
                <a href={`#${typedTranslation[index.toString()]}`}>
                  {typedTranslation[index.toString()].title}
                </a>
              </li>
            ))}

            {/* SPECIAL LIST ITEMS */}
            <li>
              <HeaderModeButton
                darkModeSignal={darkModeSignal}
                prev={"light"}
              />
            </li>
            <li className={"link"}>
              <Language lang={lang} />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
