import { useEffect, useState } from "preact/hooks";
import { Brand, Hamburger } from "../components/index.ts";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    self.addEventListener("scroll", (e) => {
      if (self.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <header
      className={`w-screen fixed z-[999] top-0 left-0 transition-colors ${
        isScrolled ? "bg-black/50 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <nav className="p-4 container mx-auto flex items-center justify-between">
        <Brand />
        <div>
          <Hamburger
            containerClassName="md:hidden overflow-hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <ul
            className={`fixed z-10 top-[1vh] w-[80%] rounded-r-2xl transition-all p-8 text-3xl ${
              isMenuOpen ? "left-0" : "-left-full"
            } font-semibold bg-black h-[98vh] md:text-lg md:p-0 md:static md:flex md:z-0 md:top-0 md:left-0 md:w-auto md:h-auto md:gap-2 md:text-black md:bg-transparent`}
          >
            <li className="link">
              <a href="#about">About</a>
            </li>

            <li className="link">
              <a href="#projects">Projects</a>
            </li>

            <li className="link">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
