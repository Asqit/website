import { FaInstagram, FaGithub } from "react-icons/fa";
import ContactForm from "./components/contactForm/ContactForm";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section className="p-4 md:p-16 md:py-32 bg-bg0" id="contact">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center">
        {/* The contact text division */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 my-4">
          <article className="p-4">
            <h2 className="text-3xl md:text-4xl font-black">
              {t("contact.details-title")}
            </h2>
            <ul>
              <li>Phone: +420 771 115 994</li>
              <li>Email: ondrejtucek9@gmail.com</li>
            </ul>
          </article>
          <article className="p-4">
            <h2 className="text-3xl md:text-4xl font-black">
              {t("contact.location-title")}
            </h2>
            <p>{t("contact.location-city")}</p>
          </article>
          <ul className="p-4 col-span-2 lg:col-span-1 lg:items-start lg:justify-start">
            <li className="my-2">
              <a
                className="link dark text-3xl inline-flex gap-x-4 items-center"
                target="_blank"
                href="https://www.github.com/asqit"
              >
                <FaGithub className="peer" />
                <span className="font-medium text-xl duration-200 origin-left scale-0 peer-hover:scale-100">
                  Github
                </span>
              </a>
            </li>

            <li>
              <a
                className="link dark text-3xl inline-flex gap-x-4 items-center"
                target="_blank"
                href="https://www.instagram.com/tucek_andrew/"
              >
                <FaInstagram className="inline peer" />
                <span className="font-medium text-xl duration-200 origin-left scale-0 peer-hover:scale-100">
                  Instagram
                </span>
              </a>
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
