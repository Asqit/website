import { Translation } from "../../../routes/_middleware.tsx";

interface ContactProps {
  lang: Translation["contact"];
}

export function Contact({ lang }: ContactProps) {
  return (
    <section
      className={"p-8 py-16 scroll-m-8"}
      id="contact"
    >
      <main className="py-16 px-4 container mx-auto max-w-7xl flex flex-col items-center justify-center gap-y-4 bg-gray-100 dark:bg-background-10-dark rounded-2xl">
        <h2 className="font-black text-2xl md:text-3xl lg:text-6xl my-3 text-center">
          {lang.title}
        </h2>
        <h4 className={"text-slate-600 dark:text-slate-400"}>
          ondrejtucek9@gmail.com
        </h4>
        <p className="text-center text-sm md:text-base xl:text-lg max-w-4xl mx-auto">
          {lang.paragraph}
        </p>
        <a href="mailto:ondrejtucek9@gmail.com" className="btn primary">
          {lang.send_btn}
        </a>
      </main>
    </section>
  );
}
