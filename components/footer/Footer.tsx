import {
  FaDev,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaPaperclip,
} from "react-icons/fa";
import { asset } from "https://deno.land/x/fresh@1.1.5/runtime.ts";

export function Footer() {
  return (
    <footer
      className={"bg-black text-slate-200 p-8"}
    >
      <article
        className={"container max-w-4xl mx-auto p-4 flex flex-col md:flex-row gap-6 md:gap-0 items-center md:justify-around"}
      >
        <div className={"text-center md:text-left"}>
          <h3 className={"font-bold text-2xl"}>
            Ondřej Tuček
          </h3>
          <p className={"my-1"}>Junior full-stack developer</p>
          <ul
            className={"flex items-center justify-center md:justify-start gap-x-2 text-2xl text-primary-10"}
          >
            <li>
              <a
                target="blank"
                href={"https://www.instagram.com/tucek_andrew/"}
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                target="blank"
                rel="noreferrer"
                href={"https://www.github.com/asqit"}
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                target="blank"
                rel="noreferrer"
                href={"https://dev.to/iasqiti"}
              >
                <FaDev />
              </a>
            </li>
            <li>
              <a target="blank" rel="author" href={asset("Resume.pdf")}>
                <FaPaperclip />
              </a>
            </li>
            <li>
              <a
                target="blank"
                rel="author"
                href="mailto:ondrejtucek9@gmail.com"
              >
                <FaEnvelope />
              </a>
            </li>
          </ul>
        </div>
        <ul className={"hidden md:block text-center"}>
          <li>
            <b>Links</b>
          </li>
          <li>
            <a
              rel="external"
              target="blank"
              href={"https://github.com/asqit/website"}
            >
              code
            </a>
          </li>
          <li>
            <a rel="tag" href={"#about"}>about</a>
          </li>
          <li>
            <a rel="tag" href={"#projects"}>projects</a>
          </li>
        </ul>
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
      </article>
    </footer>
  );
}
