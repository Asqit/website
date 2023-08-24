import { Shapes } from "../../index.ts";

export function Hero() {
  return (
    <section
      className={"h-[100vh] min-h-fit py-16 scroll-m-8 relative overflow-x-hidden"}
    >
      <div
        className={"container mx-auto max-w-7xl h-full grid grid-cols-5 items-center"}
      >
        <article
          className={"p-8 md:col-start-1 md:ml-16 col-span-full lg:col-span-3"}
        >
          <h1
            className={"font-black md:text-xl text-primary-10 animate-fade-in-up"}
          >
            Hi there! My name is
          </h1>
          <h2
            className={"text-4xl font-black md:text-6xl lg:text-7xl dark:text-slate-100 animate-fade-in-up"}
          >
            Ondřej Tuček.
          </h2>
          <h3
            className={"text-4xl md:text-6xl lg:text-7xl font-black dark:text-slate-400 text-slate-600 animate-fade-in-up"}
          >
            Web Developer
          </h3>
          <p
            className={"max-w-lg md:text-lg mt-4 font-semibold animate-fade-in-up"}
            style={{ animationDuration: "1300ms" }}
          >
            Passionate computer enthusiast with love for Linux and enjoys
            developing reliable, high-performance software using cutting-edge
            technologies.
          </p>
        </article>
        <figure className={"hidden lg:block col-span-2"}>
          <Shapes />
        </figure>
      </div>
    </section>
  );
}
