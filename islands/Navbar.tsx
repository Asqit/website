import { useEffect, useState } from "preact/hooks";
import { Brand, Hamburger } from "../components/index.ts";
import MouseFollower from "./MouseFollower.tsx";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFollowingMouse, setIsFollowingMouse] = useState(true);

  const toggleIsVisible = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (innerWidth < 576) {
      setIsFollowingMouse(false);
    }

    if (self.scrollY > 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    self.addEventListener("scroll", (e) => {
      if (self.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <>
      <header
        className={`fixed w-screen top-0 left-0 z-[999] transition-all ${
          isScrolled
            ? "bg-black/50 backdrop-blur-xl"
            : "bg-transparent backdrop-blur-none"
        }`}
      >
        <nav
          className={`container mx-auto flex items-center justify-between flex-wrap p-4 py-8`}
        >
          <Brand />
          <div className="md:hidden relative z-50">
            <Hamburger isOpen={isMenuOpen} onClick={toggleIsVisible} />
          </div>
          <ul
            className={`hidden basis-full md:basis-auto md:flex items-center gap-x-2 uppercase font-semibold`}
          >
            <li className="link transition-all hover:bg-primary-10 hover:text-white hover:px-3 border-b-2 border-transparent rounded-md hover:border-b-primary-0">
              <a href="/#about">About</a>
            </li>

            <li className="link transition-all hover:bg-primary-10 hover:text-white hover:px-3 border-b-2 border-transparent rounded-md hover:border-b-primary-0">
              <a href="/#skills">
                Skills
              </a>
            </li>

            <li className="link transition-all hover:bg-primary-10 hover:text-white hover:px-3 border-b-2 border-transparent rounded-md hover:border-b-primary-0">
              <a href="/#projects">Projects</a>
            </li>

            <li className="link transition-all hover:bg-primary-10 hover:text-white hover:px-3 border-b-2 border-transparent rounded-md hover:border-b-primary-0">
              <a href="/#contact">
                Contact
              </a>
            </li>

            <li
              onClick={() => setIsFollowingMouse((p) => !p)}
              className={`ml-2 font-bold cursor-pointer border-b border-transparent hover:underline relative before:absolute before:bg-white before:h-full before:-left-2 before:w-[2px] ${
                isFollowingMouse ? "text-primary-10" : "text-white"
              }`}
            >
              Mouse
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
      <MouseFollower isEnabled={isFollowingMouse} />
    </>
  );
}
