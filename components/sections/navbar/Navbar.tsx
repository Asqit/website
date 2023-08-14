import { Brand } from "../../index.ts";

export function Navbar() {
  return (
    <>
      <header
        className={`w-screen fixed top-0 left-0 z-[999] transition-all bg-background-0/40 backdrop-blur-md`}
      >
        <nav
          className={`container mx-auto max-w-7xl flex items-center justify-between flex-wrap p-4 py-8`}
        >
          <Brand />

          <input id="hamburger" type={"checkbox"} className={"peer hidden"} />
          <label
            htmlFor={"hamburger"}
            className={"w-8 h-8 flex justify-around flex-col flex-wrap z-10 cursor-pointer md:hidden"}
          >
            <span
              className={`bg-slate-200 block w-8 h-[0.35rem] rounded transition-all origin-[1px] peer-checked:-rotate-45 peer-checked:bg-transparent rotate-0`}
            />
            <span
              className={`bg-slate-200 block w-8 h-[0.35rem] rounded transition-all origin-[1px] peer-checked:translate-x-full peer-checked:bg-transparent translate-x-0`}
            />
            <span
              className={`bg-slate-200 block w-8 h-[0.35rem] rounded transition-all origin-[1px] peer-checked:rotate-45 peer-checked:bg-transparent rotate-0`}
            />
          </label>

          <ul
            className={"basis-full hidden peer-checked:flex flex-col items-center justify-center text-lg md:flex md:flex-row md:basis-auto gap-2"}
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
