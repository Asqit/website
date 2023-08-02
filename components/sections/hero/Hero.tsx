import { asset } from "https://deno.land/x/fresh@1.2.0/runtime.ts";

export function Hero() {
  const quotes: string[] = [
    "I Make Web Apps",
    "Website Maker",
    "FOSS Enjoyer",
    "Junior Rustcean",
    "VIm > emacs",
    "Redditor, Lol",
    "Sprawl cowboy",
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <section
      className={"w-full h-[100vh] min-h-fit bg-background-0 text-gray-200 py-16 scroll-m-8"}
    >
      <div
        className={"container mx-auto max-w-7xl h-full grid grid-cols-5 items-center"}
      >
        <article
          className={"p-4 col-span-2"}
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
        <figure className={"col-span-3"}>
          <img
            src={asset("images/snippet.webp")}
            alt="code snippet:Hello username"
          />
        </figure>
      </div>
    </section>
  );
}
