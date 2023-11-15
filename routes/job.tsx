import { Chip, JobBanner } from "../components/index.ts";
import { asset, Head } from "$fresh/runtime.ts";
import { State } from "./_middleware.tsx";
import { PageProps } from "$fresh/server.ts";

export default function Job(props: PageProps) {
  const raw = props.state.translation as State["translation"];
  const translation = raw["job"];

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
                <h3 className={"my-2 font-bold text-lg"}>
                  {translation.introduction_title}
                </h3>
                <p className={"my-4"}>
                  {translation.introduction}
                </p>
              </article>

              {/* zkušenosti */}
              <article className={"my-4 p-4"}>
                <h3 className={"my-2 font-bold text-lg"}>
                  {translation.current_job_title}
                </h3>
                <p className={"my-4"}>
                  {translation.current_job}
                </p>
              </article>

              {/* dovednosti */}
              <article className={"my-4 p-4"}>
                <h3 className={"my-2 font-bold text-lg"}>
                  {translation.skills_title}
                </h3>
                <p className="my-4">
                  {translation.skills}
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
                  {translation.contact_title}
                </h3>
                <JobBanner isLookingForJob={true} />
                <p className={"my-4"}>
                  {translation.contact}
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
                <h3 className={"my-2 font-bold text-lg"}>
                  {translation.personality_title}
                </h3>
                <p className={"my-4"}>
                  {translation.personality_1}
                </p>

                <p className={"my-4"}>
                  {translation.personality_2}
                </p>
                <p className={"my-4"}>
                  {translation.personality_3}
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
