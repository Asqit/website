import { Chip, JobBanner } from "../components/index.ts";

export default function Job() {
  return (
    <section className={"min-h-screen h-fit py-16"}>
      <div
        className={"p-4 md:p-8 max-w-6xl mx-auto bg-background-10 dark:bg-background-10-dark rounded-xl shadow-md"}
      >
        <header
          className={"dark:bg-white dark:text-black bg-black text-white rounded-xl my-4 p-16"}
        >
          <h1 className={"text-xl md:text-3xl font-bold"}>Job offers</h1>
          <h2
            className={"text-lg md:text-xl font-semibold text-slate-300 dark:text-slate-500"}
          >
            Wanna cooperate more? Well, then this page is for you.
          </h2>
        </header>

        {/* úvod */}
        <article className={"my-4 p-4"}>
          <h3 className={"my-2 font-bold text-lg"}>Introduction</h3>
          <p className={"my-4"}>
            Ahoj Světe! My name is Ondřej Tuček, and I am a full-stack web
            developer. I am a 22-year-old Czech with a burning passion for the
            computer world, programming, cars, and history. I started my journey
            in the world of programming in 2018 when I wrote my first 'hello
            world' in Bash during my sophomore year in high school.
          </p>
        </article>

        {/* zkušenosti */}
        <article className={"my-4 p-4"}>
          <h3 className={"my-2 font-bold text-lg"}>What do I now</h3>
          <p className={"my-4"}>
            As for now I work as IT technician. I wire and then setup computer
            networks using MikroTik and prepare CCTV systems with Dahua. I also
            have made and maintain private online radio for string of
            restaurants. The main server is running on debian 11 and my clients
            are made out of Raspberry Pi 4.
          </p>
        </article>

        {/* dovednosti */}
        <article className={"my-4 p-4"}>
          <h3 className={"my-2 font-bold text-lg"}>My skills</h3>
          <p className="my-4">
            I am able to code fluently in JavaScript transpilled via TypeScript
            and script simple things in bash. I am also learning Java with
            course from University of Helsinki. The course is Java Programming
            II, which is the second addition to the whole Java programming
            series.
          </p>
          <ul>
            <li>- JavaScript (advanced)</li>
            <li>- TypeScript (advanced)</li>
            <li>- Bash (mid)</li>
            <li>- Java (beginner)</li>
          </ul>
        </article>

        {/* zájmy a osobnost */}
        <article className={"my-4 p-4"}>
          <h3 className={"my-2 font-bold text-lg"}>Me personally</h3>
          <p className={"my-4"}>
            I am introvert and I don't hide it. I like to work in team, but
            because of my stubbornest usually I don't seek help from others.
            Besides being introvert I also suffer from social anxiety, but I
            actively fight against it. I am trying to be polite, kind and
            generous to others. (Se slušností nejdál dojdeš)
          </p>

          <p>
            In my free time I like to read books, most recently the sprawl saga
            from William Gibson. When it comes to movies I am huge fan of
            Quentin Tarantino, Martin Scorsese, Zdeněk Svěrák and George Lucas.
          </p>
          <p>
            Just as any youngster these days I also play video games. I prefer a
            good written story rather than multiplayer madness. I also like
            watching history videos (Historia Civilis), further practice my
            programming skills or taking night trips in my old
            cassette-player-holding BMW.
          </p>
        </article>

        {/* kontaktní informace */}
        <article className={"my-4 p-4"}>
          <h3 className={"my-2 font-bold text-lg"}>Contact Information</h3>
          <JobBanner isLookingForJob={true} />
          <p className={"my-4"}>
            So you have decided to contact me? Great! There are few ways to
            contact me. You can use my contact form, that utilize service{" "}
            <code>ntfy.sh</code>{" "}
            or write an actual email. If you wanna see me in real world, you can
            do so either in Prague or Czech Budweis.
          </p>

          <ul className={"flex flex-wrap gap-2"}>
            <li>
              <Chip>
                <a href="/#contact">ntfy.sh</a>
              </Chip>
            </li>
            <li>
              <Chip>
                <a href="mailto:ondrejtucek9@gmail.com">
                  ondrejtucek9@gmail.com
                </a>
              </Chip>
            </li>
            <li>
              <Chip>
                <span>+420 771 115 994</span>
              </Chip>
            </li>
            <li>
              <Chip>
                <a
                  href={"https://www.instagram.com/tucek_andrew/"}
                >
                  Instagram
                </a>
              </Chip>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
