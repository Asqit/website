export function Hero() {
  const quotes: string[] = [
    "I Make Web Apps",
    "Website Maker",
    "FOSS Enjoyer",
    "Junior Rustcean",
    "Redditor, Lol",
    "VIm > emacs",
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <section className={"w-full h-screen min-h-fit text-gray-200"}>
      <div
        className={"w-full h-full backdrop-blur-3xl grid grid-cols-8 items-center justify-center"}
      >
        <article
          className={"col-span-full p-4 md:p-0 md:col-start-3 lg:col-end-6"}
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
