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
      <main className="py-16 container mx-auto max-w-7xl px-4 flex flex-col items-center justify-center gap-y-4 bg-gray-100 dark:bg-background-10-dark rounded-md">
        <h2 className="font-black text-2xl md:text-3xl lg:text-6xl my-3 text-center">
          {lang.title}
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto">
          {lang.paragraph}
        </p>
        <a href="mailto:ondrejtucek9@gmail.com" className="btn primary">
          {lang.send_btn}
        </a>
      </main>
    </section>
  );
}
