import { asset } from "$fresh/runtime.ts";
import { Translation } from "../../../routes/_middleware.tsx";
import { Shapes } from "../../index.ts";

export function Hero(props: { lang: Translation["hero"] }) {
  return (
    <section
      className={"h-[100vh] min-h-fit py-16 scroll-m-8 relative"}
    >
      <img
        src={asset("images/pattern.png")}
        alt="pattern"
        className={"absolute z-10 bottom-0 left-0"}
        width={128}
      />

      <div
        className={"container mx-auto max-w-7xl h-full grid grid-cols-5 items-center"}
      >
        <article
          className={"p-8 md:col-start-1 md:ml-16 col-span-full lg:col-span-3"}
        >
          <h1
            className={"text-4xl font-black md:text-6xl lg:text-7xl dark:text-slate-100 animate-fade-in-up"}
          >
            {props.lang.greetings} Ondřej.
          </h1>
          <h2
            className={"font-semibold text-xl md:text-3xl text-primary-0 dark:text-primary-10 my-2 animate-fade-in-up"}
            style={{ animationDuration: "1300ms" }}
          >
            Web Developer & computer enthusiast.
          </h2>

          <p
            className={"max-w-lg md:text-lg mt-4 font-semibold animate-fade-in-up"}
            style={{ animationDuration: "1300ms" }}
          >
            {props.lang.subtitle}
          </p>
        </article>
        <figure
          className={"absolute -z-10 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 opacity-40 lg:opacity-100 lg:translate-x-0 lg:translate-y-0 lg:static lg:z-0 lg:right-auto lg:top-auto lg:block col-span-2"}
        >
          <Shapes />
        </figure>
      </div>
    </section>
  );
}
