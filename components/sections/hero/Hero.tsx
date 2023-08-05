import { asset } from "https://deno.land/x/fresh@1.2.0/runtime.ts";

export function Hero() {
  const quotes: string[] = [
    "Website Maker",
    "Full-Stack Dev.",
    "Redditor, Lol",
    "Sprawl cowboy",
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <section
      className={"w-full h-[100vh] min-h-fit bg-gradient-to-b from-black to-background-10  text-gray-200 py-16 scroll-m-8 relative"}
    >
      <img
        src={asset("images/pattern.webp")}
        className={"absolute w-full h-full object-cover top-0 left-0 pointer-events-none animate-pulse"}
      />

      <div
        className={"container mx-auto max-w-7xl h-full grid grid-cols-5 items-center"}
      >
        <article
          className={"p-4 md:col-start-2 col-span-full"}
        >
          <h3 className={"font-black text-primary-10 animate-fade-in-up"}>
            Hi there! My name is
          </h3>
          <h1
            className={"text-3xl font-black md:text-6xl text-slate-100 animate-fade-in-up"}
          >
            Ondřej Tuček.
          </h1>
          <h2
            className={"text-3xl md:text-6xl font-black text-slate-400 animate-fade-in-up"}
          >
            {randomQuote || "web developer"}
          </h2>
          <p
            className={"max-w-md mt-4 font-semibold animate-fade-in-up"}
            style={{ animationDuration: "2.5s" }}
          >
            I am a passionate computer enthusiast, and as such, I have a deep
            love for Linux and enjoy developing reliable, high-performance
            software using cutting-edge technologies.
          </p>
        </article>
      </div>
    </section>
  );
}
