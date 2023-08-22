export function Hero() {
  return (
    <section
      className={"h-[100vh] min-h-fit text-gray-200 py-16 scroll-m-8"}
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
            Web Developer
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
