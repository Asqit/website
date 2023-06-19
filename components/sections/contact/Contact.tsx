import { FaBeer, FaEnvelope, FaPhone } from "react-icons/fa";
import ContactForm from "../../../islands/ContactForm.tsx";
import { SectionTitle } from "../../common/section-title/SectionTitle.tsx";

export function Contact() {
  return (
    <section
      className={"md:bg-background-0/10 bg-background-0 backdrop-blur-[200px] py-8 md:py-16"}
      id="contact"
    >
      <div
        className={"container mx-auto max-w-7xl p-8 text-white "}
      >
        <SectionTitle value="Contact" />
        <div className={"md:grid grid-cols-2 justify-center items-center"}>
          <article className={"hidden md:block"}>
            <h4 className={"font-semibold text-xl"}>Contact me directly</h4>
            <ul>
              <li className={"flex gap-x-1 items-center"}>
                <FaPhone />
                <b>Phone:</b>+420 771 115 994
              </li>
              <li className={"flex gap-x-1 items-center"}>
                <FaEnvelope />
                <b>Email:</b>
                <a
                  href={"mailto:ondrejtucek9@gmail.com"}
                  className={"underline"}
                >
                  ondrejtucek9@gmail.com
                </a>
              </li>
              <li className={"flex gap-x-1 items-center flex-wrap"}>
                <FaBeer className={"text-yellow-500 -rotate-45"} />
                <b>
                  In-Person
                </b>: České Budějovice, Česká Republika
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
