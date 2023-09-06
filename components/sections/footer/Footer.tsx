import {
  FaDev,
  FaEnvelope,
  FaGithub,
  FaPaperclip,
} from "react-icons/fa";
import { asset } from "https://deno.land/x/fresh@1.1.5/runtime.ts";
import { Brand } from "../../index.ts";

export function Footer() {
  return (
    <footer className="p-8">
      <div className="container mx-auto max-w-7xl bg-black text-white dark:text-black dark:bg-white rounded-md p-4 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-8">
            <Brand className="dark:text-black text-white" />
            <h1 className={"font-semibold dark:text-slate-600 text-slate-300"}>
              Web Developer
            </h1>
            <p className="my-2 text-sm">
              Passionate computer enthusiast with love for Linux and enjoys
              developing reliable, high-performance software using cutting-edge
              technologies.
            </p>
          </div>
          <div className="p-8">
            <h1 className="uppercase text-xl dark:text-slate-600 text-slate-300 mb-4">
              Navigation
            </h1>
            <ul>
<<<<<<< Updated upstream
              <li>
                <a className={"hover:underline"} rel="tag" href={"#about"}>about</a>
              </li>
              <li>
                <a className={"hover:underline"} rel="tag" href={"#projects"}>skills</a>
              </li>
              <li>
                <a className={"hover:underline"} rel="tag" href={"#projects"}>projects</a>
              </li>
              <li>
                <a className={"hover:underline"} rel="tag" href={"#projects"}>contact</a>
=======
              <li className={"hover:underline"}>
                <a rel="tag" href={"/#about"}>about</a>
              </li>
              <li className={"hover:underline"}>
                <a rel="tag" href={"/#projects"}>skills</a>
              </li>
              <li className={"hover:underline"}>
                <a rel="tag" href={"/#projects"}>projects</a>
              </li>
              <li className={"hover:underline"}>
                <a rel="tag" href={"/#projects"}>contact</a>
              </li>
              <li className={"hover:underline"}>
                <a rel="tag" href={"/job"}>job offers</a>
>>>>>>> Stashed changes
              </li>
            </ul>
          </div>
          <div className="p-8">
            <h1 className="uppercase text-xl dark:text-slate-600 text-slate-300 mb-4">
              Contact Me
            </h1>
            <ul>
              <li>
                <a
                  target="blank"
                  className={"inline-flex gap-x-1 tex-xl items-center hover:text-primary-10"}
                  rel="noreferrer"
                  aria-label={"Github"}
                  href={"https://www.github.com/asqit"}
                >
                  <FaGithub /> Github
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  className={"inline-flex gap-x-1 tex-xl items-center hover:text-primary-10"}
                  rel="noreferrer"
                  aria-label={"Dev.to"}
                  href={"https://dev.to/iasqiti"}
                >
                  <FaDev /> Dev.to
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  className={"inline-flex gap-x-1 tex-xl items-center hover:text-primary-10"}
                  rel="author"
                  href={asset("docs/cv.pdf")}
                  aria-label={"CV"}
                >
                  <FaPaperclip /> CV
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  className={"inline-flex gap-x-1 tex-xl items-center hover:text-primary-10"}
                  rel="author"
                  aria-label={"Email"}
                  href="mailto:ondrejtucek9@gmail.com"
                >
                  <FaEnvelope /> Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-8">
          <hr className="dark:border-slate-400 mb-8" />
          <div
            className={"flex justify-between items-center flex-wrap gap-y-4"}
          >
            <div>
              <p>
                Website by Ondřej Tuček
              </p>
              <a href="https://fresh.deno.dev" target="_blank" rel="external">
                <span className={"flex items-center gap-x-2"}>
                  <img
                    src={asset("images/logo.svg")}
                    alt={"Fresh framework logo"}
                    width={32}
                    height={32}
                  />{" "}
                  Made with <b>Fresh</b>
                </span>
              </a>
            </div>
            <div className={"md:text-right"}>
              <p>
                Feedback? Issue?{" "}
                <a
                  rel="external"
                  target="blank"
                  className={"underline"}
                  href={"https://github.com/asqit/website"}
                >
                  Let me know!
                </a>
              </p>
              <p>Copyright &copy; 2023</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
