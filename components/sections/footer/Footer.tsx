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
      className={"bg-black text-slate-200 p-8 relative z-40"}
    >
      <article
        className={"container max-w-4xl mx-auto p-4 flex flex-col md:flex-row gap-6 md:gap-0 items-center md:justify-around"}
      >
        <div className={"text-center md:text-left"}>
          <h1 className={"font-bold text-2xl"}>
            Ondřej Tuček
          </h1>
          <p className={"my-1 mb-2"}>Full-Stack Developer</p>
          <ul
            className={"flex items-center justify-center md:justify-start gap-x-2 text-2xl text-primary-10"}
          >
            <li className={"hover:text-primary-0"}>
              <a
                target="blank"
                rel="noreferrer"
                aria-label={"An icon link to author's github"}
                href={"https://www.github.com/asqit"}
                title={"Ondřej's github"}
              >
                <FaGithub />
              </a>
            </li>
            <li className={"hover:text-primary-0"}>
              <a
                target="blank"
                rel="noreferrer"
                aria-label={"An icon link to author's blog"}
                href={"https://dev.to/iasqiti"}
                title={"Ondřej's blog"}
              >
                <FaDev />
              </a>
            </li>
            <li className={"hover:text-primary-0"}>
              <a
                target="blank"
                rel="author"
                href={asset("docs/cv.pdf")}
                aria-label={"An icon link to cv in .pdf format"}
                title={"Ondřej's CV document"}
              >
                <FaPaperclip />
              </a>
            </li>
            <li className={"hover:text-primary-0"}>
              <a
                target="blank"
                rel="author"
                aria-label={"An icon link to author's email"}
                href="mailto:ondrejtucek9@gmail.com"
                title={"Ondřej's email contact"}
              >
                <FaEnvelope />
              </a>
            </li>
            <li className={"hover:text-primary-0"}>
              <a
                target="blank"
                aria-label={"An icon link to author's instagram"}
                href={"https://www.instagram.com/tucek_andrew/"}
                title={"Ondřej's instagram"}
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
        <ul className={"hidden md:block text-center"}>
          <li>
            <b>Useful Links</b>
          </li>
          <li className={"link"}>
            <a
              rel="external"
              target="blank"
              href={"https://github.com/asqit/website"}
            >
              source code
            </a>
          </li>
          <li className={"link"}>
            <a rel="tag" href={"#about"}>about</a>
          </li>
          <li className={"link"}>
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
