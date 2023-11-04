import { Chip, JobBanner } from "../components/index.ts";
import { asset, Head } from "$fresh/runtime.ts";

export default function Job() {
  return (
    <>
      <Head>
        <title>Ondřej Tuček - Job offers</title>
      </Head>
      <section className={"min-h-screen h-fit py-16 mt-20"}>
        <div
          className={"p-4 md:p-8 max-w-7xl mx-auto bg-background-10 dark:bg-background-10-dark rounded-xl shadow-md"}
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

          <div className={"xl:grid grid-cols-2 gap-4 items-center"}>
            <div>
              {/* úvod */}
              <article className={"my-4 p-4"}>
                <h3 className={"my-2 font-bold text-lg"}>Introduction</h3>
                <p className={"my-4"}>
                  Ahoj Světe! My name is Ondřej Tuček, and I am a full-stack web
                  developer. I am a 22-year-old Czech with a burning passion for
                  the computer world, programming, cars, and history. I started
                  my journey in the world of programming in 2018 when I wrote my
                  first 'hello world' in Bash during my sophomore year in high
                  school.
                </p>
              </article>

              {/* zkušenosti */}
              <article className={"my-4 p-4"}>
                <h3 className={"my-2 font-bold text-lg"}>What do I now</h3>
                <p className={"my-4"}>
                  As for now I work as IT technician. I wire and then setup
                  computer networks using MikroTik and prepare CCTV systems with
                  Dahua. I also have made and maintain private online radio for
                  string of restaurants. The main server is running on debian 11
                  and my clients are made out of Raspberry Pi 4.
                </p>
              </article>

              {/* dovednosti */}
              <article className={"my-4 p-4"}>
                <h3 className={"my-2 font-bold text-lg"}>My skills</h3>
                <p className="my-4">
                  I am able to code fluently in JavaScript / Typescript and
                  script simple things in bash. I am also learning Java with
                  course from University of Helsinki. I also study various other
                  programming language just out of my curiosity.
                </p>
                <ul>
                  <li>- JavaScript (medior)</li>
                  <li>- TypeScript (medior)</li>
                  <li>- Python (junior)</li>
                  <li>- Bash (junior)</li>
                  <li>- Java (junior)</li>
                  <li>- Rust (less than junior, but willing to learn)</li>
                </ul>
              </article>

              {/* kontaktní informace */}
              <article className={"my-4 p-4"}>
                <h3 className={"my-2 font-bold text-lg"}>
                  Contact Information
                </h3>
                <JobBanner isLookingForJob={true} />
                <p className={"my-4"}>
                  So you have decided to contact me? Great! There are few ways
                  to so. You can use my contact form, that uses 3rd party
                  service called <code>ntfy.sh</code>{" "}
                  or you can write me an actual email. We can arrange personal
                  meeting Prague or České Budějovice after previous agreement.
                </p>

                <ul className={"flex flex-wrap gap-2"}>
                  <li>
                    <Chip>
                      <a target={"_blank"} href="/#contact">ntfy.sh</a>
                    </Chip>
                  </li>
                  <li>
                    <Chip>
                      <a target={"_blank"} href="mailto:ondrejtucek9@gmail.com">
                        ondrejtucek9@gmail.com
                      </a>
                    </Chip>
                  </li>
                  <li>
                    <Chip>
                      <a target={"_blank"} href="tel:+420771115994">
                        +420 771 115 994
                      </a>
                    </Chip>
                  </li>
                  <li>
                    <Chip>
                      <a
                        target={"_blank"}
                        href={"https://www.instagram.com/tucek_andrew/"}
                      >
                        Instagram
                      </a>
                    </Chip>
                  </li>
                  <li>
                    <Chip>
                      <a target={"_blank"} href="https://dev.to/iasqiti">
                        Dev.to
                      </a>
                    </Chip>
                  </li>
                  <li>
                    <Chip>
                      <a target={"_blank"} href="https://codepen.io/Asqit">
                        Codepen
                      </a>
                    </Chip>
                  </li>
                  <li>
                    <Chip>
                      <a target={"_blank"} href={asset("/docs/cv.pdf")}>CV</a>
                    </Chip>
                  </li>
                </ul>
              </article>

              {/* zájmy a osobnost */}
              <article className={"my-4 p-4"}>
                <h3 className={"my-2 font-bold text-lg"}>Me personally</h3>
                <p className={"my-4"}>
                  I am introvert and I don't hide it. I like to work in team,
                  but because of my stubbornest usually I don't seek help from
                  others. Besides being introvert I also suffer from social
                  anxiety, but I actively fight against it. I am trying to be
                  polite, kind and generous to others. (Se slušností nejdál
                  dojdeš)
                </p>

                <p className={"my-4"}>
                  In my free time I like to read books, most recently the sprawl
                  saga from William Gibson. When it comes to movies I am huge
                  fan of Quentin Tarantino, Martin Scorsese, Zdeněk Svěrák and
                  George Lucas.
                </p>
                <p className={"my-4"}>
                  Just as any youngster these days I also play video games. I
                  prefer a good written story rather than multiplayer madness. I
                  also like watching history videos (Historia Civilis), further
                  practice my programming skills or taking night trips in my old
                  cassette-player-holding BMW.
                </p>
              </article>
            </div>

            {/* Image by the side */}
            <figure className={"relative hidden xl:block"}>
              <img
                className={"rounded-xl object-cover"}
                src={asset("/images/job_offer.webp")}
                alt="Ondřej holding a falcon"
                loading={"eager"}
                title={"Me and random falcon in harbour in Souse, Tunisia"}
              />
              <span
                className={"absolute bottom-2 right-2 text-white z-[1000] bg-black/40 px-2 py-1 backdrop-blur-sm rounded-md"}
              >
                Souse, Tunisia 2023
              </span>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
