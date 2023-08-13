import { Brand } from "../../index.ts";

export function Navbar() {
  return (
    <>
      <header
        className={`w-screen absolute top-0 left-0 z-[999] transition-all`}
      >
        <nav
          className={`container mx-auto max-w-7xl flex items-center justify-between flex-wrap p-4 py-8`}
        >
          <Brand />
          <ul
            className={"flex gap-x-2"}
          >
            <li className="link">
              <a href="#about">About</a>
            </li>

            <li className="link">
              <a href="#skills">Skills</a>
            </li>

            <li className="link">
              <a href="#projects">Projects</a>
            </li>

            <li className="link">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
