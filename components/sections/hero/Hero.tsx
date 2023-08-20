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
      className={"w-full backdrop-blur-[200px] h-[100vh] min-h-fit bg-gradient-to-b background-10 text-gray-200 py-16 scroll-m-8 relative"}
    >
      <div
        className={"container mx-auto max-w-7xl h-full grid grid-cols-5 items-center"}
      >
        <article
          className={"p-8 md:col-start-1 md:ml-16 col-span-full"}
        >
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
            {randomQuote || "web developer"}
          </h3>
          <p
            className={"max-w-lg md:text-lg mt-4 font-semibold animate-fade-in-up"}
            style={{ animationDuration: "1300ms" }}
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
