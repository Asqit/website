import { useState } from "preact/hooks";
import { Brand, Hamburger } from "../components/index.ts";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleIsVisible = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header
        className={`fixed w-screen top-0 left-0 z-[999] transition-all bg-background-10/80 backdrop-blur-xl`}
      >
        <nav
          className={`container mx-auto flex items-center justify-between flex-wrap p-4 py-8`}
        >
          <Brand />
          <div className="md:hidden relative z-50">
            <Hamburger isOpen={isMenuOpen} onClick={toggleIsVisible} />
          </div>
          <ul
            className={`hidden basis-full md:basis-auto md:flex items-center gap-x-2 uppercase`}
          >
            <li className="font-mono uppercase hover:text-primary-10 text-slate-300">
              <a href="/#about">About</a>
            </li>

            <li className="font-mono uppercase hover:text-primary-10 text-slate-300">
              <a href="/#skills">Skills</a>
            </li>

            <li className="font-mono uppercase hover:text-primary-10 text-slate-300">
              <a href="/#projects">Projects</a>
            </li>

            <li className="font-mono uppercase hover:text-primary-10 text-slate-300">
              <a href="/#contact">
                Contact
              </a>
            </li>
          </ul>
          <div
            className={`${
              isMenuOpen ? "top-0 h-screen" : "-top-[1000%] max-h-0"
            } fixed left-0 w-full z-40 bg-black p-4 transition-all md:hidden`}
          >
            <div className="flex justify-between p-4">
              <Brand />
            </div>
            <ul
              className={"text-xl uppercase mt-4 flex flex-col gap-4 items-center justify-center"}
            >
              <li onClick={toggleIsVisible} className="link">
                <a href="#about">About</a>
              </li>

              <li onClick={toggleIsVisible} className="link">
                <a href="#skills">Skills</a>
              </li>

              <li onClick={toggleIsVisible} className="link">
                <a href="#projects">Projects</a>
              </li>

              <li onClick={toggleIsVisible} className="link">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
