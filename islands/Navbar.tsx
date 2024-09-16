import { useCallback, useEffect, useState } from "preact/hooks";
import { Brand, Hamburger } from "../components/index.ts";
import { Signal } from "@preact/signals";
import { Translation } from "../routes/_middleware.tsx";
import { LanguageState, Themes } from "../utils/type.index.ts";
import { asset } from "$fresh/runtime.ts";
import { FaDev, FaEnvelope, FaGithub, FaPaperclip } from "react-icons/fa";
import { constants } from "../utils/constants.ts";
import classNames from "npm:classnames";
import Language from "./Language.tsx";

interface NavbarProps {
  themeSignal: Signal<Themes>;
  lang: LanguageState["lang"];
  translation: Translation["navbar"];
}

export default function Navbar(
  { lang, translation, themeSignal }: NavbarProps,
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

  const SelectTheme = () => (
    <select
      className="select bg-transparent w-full max-w-xs"
      onChange={(e) => {
        const val = e.currentTarget.value;

        themeSignal.value = val as Themes;
        document.querySelector("html")?.setAttribute(
          "data-theme",
          themeSignal.value,
        );
      }}
    >
      <option disabled selected>🎨 Theme</option>
      {constants.themes.map((pl) => <option key={pl} value={pl}>{pl}</option>)}
    </select>
  );

  return (
    <header
      className={`fixed w-screen top-0 left-0 z-[1200] transition-all will-change-scroll max-h-20 p-4 `}
    >
      <nav
        className={classNames(
          "container mx-auto will-change-scroll transition-all rounded-box max-w-7xl backdrop-blur-xl flex items-center justify-between flex-wrap p-6",
          isScrolled || isMenuOpen ? "bg-base-200/40 shadow" : "bg-transparent",
        )}
      >
        <Brand />
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
              <span className={"text-primary"}>
                {index}.
              </span>
              <a href={`#${typedTranslation[index.toString()]?.hyperlink}`}>
                {typedTranslation[index.toString()]?.title}
              </a>
            </li>
          ))}

          {/* SPECIAL LIST ITEMS */}
          <li>
            <SelectTheme />
          </li>
          <li>
            <Language lang={lang} />
          </li>
        </ul>
        <div
          className={classNames(
            "rounded-box fixed left-0 shadow w-full z-40 bg-accent-10/40 dark:bg-background-10/40 p-4 transition-all md:hidden backdrop-blur-xl",
            isMenuOpen ? "top-24 h-[calc(100vh-10rem)]" : "-top-96",
          )}
        >
          <ul
            className={"text-2xl capitalize mt-16"}
          >
            {sectionIds.map((link, index) => (
              <li
                key={link}
                className="font-mono capitalize hover:text-primary-0 dark:hover:text-primary-10 my-4"
              >
                <span className={"text-primary"}>
                  {index}.
                </span>
                <a href={`#${typedTranslation[index.toString()]?.hyperlink}`}>
                  {typedTranslation[index.toString()]?.title}
                </a>
              </li>
            ))}
          </ul>
          <div className={"flex gap-4 text-2xl"}>
            <Language lang={lang} />
            <SelectTheme />
          </div>

          <ul
            className={"absolute w-full bottom-4 left-0 flex gap-2 text-2xl items-center justify-center"}
          >
            <li>
              <a
                target="blank"
                className={"inline-flex gap-x-1 tex-xl items-center hover:text-primary-10"}
                rel="noreferrer"
                aria-label={"Github"}
                href={"https://www.github.com/asqit"}
                title={"Github"}
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                target="blank"
                className={"inline-flex gap-x-1 tex-xl items-center hover:text-primary-10"}
                rel="noreferrer"
                aria-label={"Dev.to"}
                href={"https://dev.to/iasqiti"}
                title={"Dev.to"}
              >
                <FaDev />
              </a>
            </li>
            <li>
              <a
                target="blank"
                className={"inline-flex gap-x-1 tex-xl items-center hover:text-primary-10"}
                rel="author"
                href={asset("docs/cv.pdf")}
                aria-label={"CV"}
                title={"CV"}
              >
                <FaPaperclip />
              </a>
            </li>

            <li>
              <a
                target="blank"
                className={"inline-flex gap-x-1 tex-xl items-center hover:text-primary-10"}
                rel="author"
                aria-label={"Email"}
                href="mailto:ondrejtucek9@gmail.com"
                title={"Email"}
              >
                <FaEnvelope />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
