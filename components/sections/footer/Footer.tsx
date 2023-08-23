import {
  FaDev,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaPaperclip,
} from "react-icons/fa";
import { asset } from "https://deno.land/x/fresh@1.1.5/runtime.ts";
import { Brand } from "../../index.ts";

export function Footer() {
  return (
    <footer className="p-8">
      <div className="container mx-auto max-w-7xl bg-white rounded-md p-4 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-8">
            <Brand />
            <h1 className={"font-semibold text-slate-600"}>Web Developer</h1>
            <p className="my-2 text-sm">
              Passionate computer enthusiast with love for Linux and enjoys
              developing reliable, high-performance software using cutting-edge
              technologies.
            </p>
          </div>
          <div className="p-8">
            <h1 className="uppercase text-xl text-slate-600 mb-4">
              Navigation
            </h1>
            <ul>
              <li className={"hover:underline"}>
                <a rel="tag" href={"#about"}>about</a>
              </li>
              <li className={"hover:underline"}>
                <a rel="tag" href={"#projects"}>skills</a>
              </li>
              <li className={"hover:underline"}>
                <a rel="tag" href={"#projects"}>projects</a>
              </li>
              <li className={"hover:underline"}>
                <a rel="tag" href={"#projects"}>contact</a>
              </li>
            </ul>
          </div>
          <div className="p-8">
            <h1 className="uppercase text-xl text-slate-600 mb-4">
              Contact Me
            </h1>
            <ul>
              <li>
                <a
                  target="blank"
                  className={"inline-flex gap-x-1 tex-xl items-center hover:text-primary-10"}
                  rel="noreferrer"
                  aria-label={"An icon link to author's github"}
                  href={"https://www.github.com/asqit"}
                  title={"Ondřej's github"}
                >
                  <FaGithub /> Github
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  className={"inline-flex gap-x-1 tex-xl items-center hover:text-primary-10"}
                  rel="noreferrer"
                  aria-label={"An icon link to author's blog"}
                  href={"https://dev.to/iasqiti"}
                  title={"Ondřej's blog"}
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
                  aria-label={"An icon link to cv in .pdf format"}
                  title={"Ondřej's CV document"}
                >
                  <FaPaperclip /> CV
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  className={"inline-flex gap-x-1 tex-xl items-center hover:text-primary-10"}
                  rel="author"
                  aria-label={"An icon link to author's email"}
                  href="mailto:ondrejtucek9@gmail.com"
                  title={"Ondřej's email contact"}
                >
                  <FaEnvelope /> Email
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  className={"inline-flex gap-x-1 tex-xl items-center hover:text-primary-10"}
                  aria-label={"An icon link to author's instagram"}
                  href={"https://www.instagram.com/tucek_andrew/"}
                  title={"Ondřej's instagram"}
                >
                  <FaInstagram /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-8">
          <hr className="dark:border-slate-400 mb-8" />
          <div className={"flex justify-between items-center flex-wrap"}>
            <div>
              <p>
                Website by Ondřej Tuček
              </p>
              <a href="https://fresh.deno.dev" target="_blank" rel="external">
                <span className={"flex items-center gap-x-2"}>
                  <img
                    src={asset("images/logo.svg")}
                    className={"w-[32px] aspect-square"}
                    alt={"Fresh framework logo"}
                  />{" "}
                  Made with <b>Fresh</b>
                </span>
              </a>
            </div>
            <div className={"text-right"}>
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
