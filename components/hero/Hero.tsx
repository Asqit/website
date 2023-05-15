import { FaArrowDown } from "react-icons/fa";

export function Hero() {
  return (
    <section
      className={"w-full h-screen bg-hero-gradient-phone md:bg-hero-gradient-desktop text-gray-200 animate-fade-in relative"}
    >
      <article
        className={"container max-w-4xl mx-auto h-full flex flex-col justify-center p-4 animate-fade-in-up"}
      >
        <h3 className={"font-black text-primary-10"}>Hi there! My name is</h3>
        <h1 className={"text-3xl font-black md:text-6xl text-slate-100"}>
          Ondřej Tuček.
        </h1>
        <h2 className={"text-3xl md:text-6xl font-black text-slate-300"}>
          I make web apps.
        </h2>
        <p className={"max-w-md mt-4 font-semibold"}>
          I am a computer enthusiast and as such I love linux and producing
          reliable, fast software with bleeding edge technologies.
        </p>
      </article>
      <FaArrowDown
        className={"absolute bottom-8 left-1/2 animate-bounce"}
      />
    </section>
  );
}
