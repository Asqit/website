import { FaBeer, FaEnvelope } from "react-icons/fa";
import { SectionTitle } from "../../common/section-title/SectionTitle.tsx";
import { Accordion, Button } from "../../index.ts";
import { Translation } from "../../../routes/_middleware.tsx";

interface ContactProps {
  lang: Translation["contact"];
}

export function Contact({ lang }: ContactProps) {
  return (
    <section
      className={"py-16 scroll-m-8"}
      id="contact"
    >
      <div
        className={"container mx-auto max-w-6xl p-8 "}
      >
        <SectionTitle value={lang.title} />

        <div className={"md:hidden"}>
          <Accordion title="Contact Info">
            <div className={"p-4"}>
              <DirectContact lang={lang} />
            </div>
          </Accordion>
        </div>

        <div className={"md:grid grid-cols-2 justify-center items-center"}>
          <article className={"hidden md:block"}>
            <DirectContact lang={lang} />
          </article>

          <ContactForm lang={lang} />
        </div>
      </div>
    </section>
  );
}

function DirectContact({ lang }: ContactProps) {
  return (
    <>
      <h2 className={"font-semibold text-xl"}>{lang.sub_title}</h2>
      <ul>
        <li className={"flex gap-x-1 items-center"}>
          <FaEnvelope />
          <b>Email:</b>
          <a
            href={"mailto:ondrejtucek9@gmail.com"}
            className={"underline hover:text-primary-0"}
          >
            ondrejtucek9@gmail.com
          </a>
        </li>
        <li className={"flex gap-x-1 items-center flex-wrap"}>
          <span className={"text-yellow-500 -rotate-45"}>
            <FaBeer />
          </span>
          <b>
            {lang.in_person}
          </b>:{" "}
          <a
            href="https://en.wikipedia.org/wiki/Prague"
            target={"_blank"}
            referrerpolicy={"no-referrer"}
            className={"hover:text-primary-0"}
          >
            Prague
          </a>
          ,{" "}
          <a
            href="https://en.wikipedia.org/wiki/%C4%8Cesk%C3%A9_Bud%C4%9Bjovice"
            target={"_blank"}
            referrerpolicy={"no-referrer"}
            className={"hover:text-primary-0"}
          >
            Czech Budweis
          </a>
        </li>
      </ul>
    </>
  );
}

function ContactForm({ lang }: ContactProps) {
  return (
    <form method="post" className={"relative z-20"}>
      <div className={"flex flex-col gap-3 my-3"}>
        <label
          className={"text-slate-600 dark:text-slate-200"}
          htmlFor={"email"}
        >
          {lang.email_address}
        </label>
        <input
          type="email"
          className={"input"}
          id="email"
          name="email"
          required
        />
      </div>

      <div className={"flex flex-col gap-3 my-3"}>
        <label
          className={"text-slate-600 dark:text-slate-200"}
          htmlFor={"message"}
        >
          {lang.message}
        </label>
        <textarea
          id="message"
          name="message"
          className={"input min-h-[100px] resize-y"}
          minLength={12}
          required
        />
      </div>

      <Button type="submit" className={"w-full my-3"}>{lang.send_btn}</Button>
    </form>
  );
}
