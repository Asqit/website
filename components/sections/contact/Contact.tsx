import { FaBeer, FaEnvelope } from "react-icons/fa";
import ContactForm from "../../../islands/ContactForm.tsx";
import { SectionTitle } from "../../common/section-title/SectionTitle.tsx";
import { asset } from "$fresh/runtime.ts";

export function Contact() {
  return (
    <section
      className={"bg-background-5 backdrop-blur-[200px] py-16 scroll-m-8"}
      id="contact"
    >
      <img
        src={asset("images/pattern-2.webp")}
        className={"absolute w-full h-full object-cover top-0 left-0 pointer-events-none animate-pulse -z-10 contrast-125"}
        alt="background illustration"
      />
      <div
        className={"container mx-auto max-w-7xl p-8 text-white "}
      >
        <SectionTitle value="Contact" />
        <div className={"md:grid grid-cols-2 justify-center items-center"}>
          <article className={"hidden md:block"}>
            <h2 className={"font-semibold text-xl"}>Contact me directly</h2>
            <ul>
              <li className={"flex gap-x-1 items-center"}>
                <FaEnvelope />
                <b>Email:</b>
                <a
                  href={"mailto:ondrejtucek9@gmail.com"}
                  className={"underline link"}
                >
                  ondrejtucek9@gmail.com
                </a>
              </li>
              <li className={"flex gap-x-1 items-center flex-wrap"}>
                <span className={"text-yellow-500 -rotate-45"}>
                  <FaBeer />
                </span>
                <b>
                  In-Person
                </b>:{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Prague"
                  target={"_blank"}
                  referrerpolicy={"no-referrer"}
                  className={"link"}
                >
                  Prague
                </a>
                or{" "}
                <a
                  href="https://en.wikipedia.org/wiki/%C4%8Cesk%C3%A9_Bud%C4%9Bjovice"
                  target={"_blank"}
                  referrerpolicy={"no-referrer"}
                  className={"link"}
                >
                  Czech Budweis
                </a>
                <span className={"basis-full text-slate-500"}>
                  (By prior arrangement)
                </span>
              </li>
            </ul>
          </article>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
