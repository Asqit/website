import { asset } from "$fresh/runtime.ts";

export function Hero() {
  return (
    <section
      className={"w-full backdrop-blur-[200px] h-[100vh] min-h-fit bg-gradient-to-b background-10 text-gray-200 py-16 scroll-m-8"}
    >
      <div
        className={"container mx-auto max-w-7xl h-full grid grid-cols-5 items-center"}
      >
        <article
          className={"p-8 md:col-start-1 md:ml-16 col-span-full"}
        >
          <img
            src={asset("images/pattern.png")}
            alt="illustration"
            width={128}
            height={128}
            className={"absolute right-8 top-8 z-10"}
          />
          <h1
            className={"font-black md:text-xl text-primary-10 animate-fade-in-up"}
          >
            Hi there! My name is
          </h1>
          <h2
            className={"text-4xl font-black md:text-6xl lg:text-7xl text-slate-100 animate-fade-in-up"}
          >
            Ondřej Tuček.
          </h2>
          <h3
            className={"text-4xl md:text-6xl lg:text-7xl font-black text-slate-400 animate-fade-in-up"}
          >
            Web Developer
          </h3>
          <p
            className={"max-w-lg md:text-lg mt-4 font-semibold animate-fade-in-up"}
            style={{ animationDuration: "1300ms" }}
          >
            Self-taught web developer from Czech Republic. I like to tinker with
            things of all kind, but mostly I do web related things.
          </p>
        </article>
      </div>
    </section>
  );
}
