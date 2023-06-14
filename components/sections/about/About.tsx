import { furtherData, languagesData, libsData } from "../../../data/skills.ts";
import AuthorImage from "../../common/author-image/AuthorImage.tsx";
import { SectionTitle } from "../../common/section-title/SectionTitle.tsx";
import { Chip } from "../../index.ts";

export function About() {
  return (
    <section
      id="about"
      className={"md:bg-background-10/10 bg-background-10 backdrop-blur-[200px] py-8"}
    >
      <main
        className={"container mx-auto max-w-7xl grid grid-cols-1 xl:grid-cols-2 gap-4 items-center p-8 text-white font-sans"}
      >
        <article>
          <SectionTitle value="About" />
          <p className={"my-4"}>
            Hi, I'm a young (21) junior full-stack web developer from Czech
            republic, that is passionate about computer world, cars and history
            facts.
          </p>
          <p className={"my-4"}>
            My journey began when I was around 10 years old. At that time I got
            my first ever computer, since then I tinkered with it and learned
            how do computers work. In year 2017 a decision was to be made, a
            decision that would forever change the way I see life: "What I wanna
            become?". Because when you code at least a guessing game, you see
            the world completely different.
          </p>
          <p>
            At first I thought I was no good for IT, because math was my arch
            nemesis, but quickly I overcame that and started attending a high
            school focused on teaching IT. Weirdly enough, distant education
            made me feel respect for math. I didn't feel embarrassed for wrong
            answers, plus vectors and combinatorics was kinda fun.
          </p>
          <p className={"my-4"}>
            I love to tinker with things of all kind, lately I am really into
            cars, but computers are forever in my hearth.
          </p>
          <p className={"my-4"}>
            Currently I live in small district town with around 100k others.
            It's an old city near borders with Austria and Germany. Although it
            is my hometown, I would love to move to bigger city, to world city
            if you will. I am able to speak natively Czech, English at B2 level
            and Currently learning German (Ich liebe lerne deutsch sprache, es
            ist so aufregend aber sehr schwer)
          </p>
        </article>
        <AuthorImage />
        <article>
          <h2 className={"mt-4 font-bold text-xl text-slate-400"}>Education</h2>
          <ul>
            <li className={"my-2"}>
              <b>EDUCAnet, České Budějovice</b>
              <ol>
                <li>High School with focus of IT</li>
                <li>2017 - 2021</li>
                <li>
                  - multimedia (Vector & Raster graphics, Video editing, SFX)
                </li>
                <li>
                  - Programming in:{" "}
                  <code>HTML5, CSS3, JavaScript, PHP, MySQL, Java</code>
                </li>
                <li>
                  - Hardware and basics of computer science
                </li>
              </ol>
            </li>
            <li className={"my-2"}>
              <b>Jihočeská univerzita</b>
              <ol>
                <li>Comp. science - Bachelor's Degree</li>
                <li>
                  2022 - 2023 <b>(ditched)</b>
                </li>
                <li>
                  I really loved my time there, but because I am suffering from
                  strong social anxiety since covid I had to quit.
                </li>
                <li>
                  - Learned basics of applications architecture. (MVP, MVC,
                  MVVM...)
                </li>
                <li>
                  - Learned basics of Data Structures and algorithms
                </li>
              </ol>
            </li>
          </ul>
        </article>
        <article>
          <h2 className={"mt-4 font-bold text-xl text-slate-400"}>Skills</h2>

          <h3 className={"my-2 font-bold"}>
            Programming languages
          </h3>
          <ul className={"flex items-center gap-2 my-2 font-mono flex-wrap"}>
            {languagesData.map((lang) => {
              return (
                <li key={lang.id}>
                  <Chip className={"flex items-center gap-x-2"}>
                    {lang.Icon ? <lang.Icon /> : null}
                    {lang.value}
                    <span className={"bg-background-10 px-1"}>
                      {lang.level}
                    </span>
                  </Chip>
                </li>
              );
            })}
          </ul>

          <h3 className={"my-2 font-bold"}>
            Libraries & frameworks
          </h3>
          <ul className={"flex items-center gap-2 my-2 font-mono flex-wrap"}>
            {libsData.map((lib) => {
              return (
                <li key={lib.id}>
                  <Chip className={"flex items-center gap-x-2"}>
                    {lib.Icon ? <lib.Icon /> : null}
                    {lib.value}
                    <span className={"bg-background-10 px-1"}>
                      {lib.level}
                    </span>
                  </Chip>
                </li>
              );
            })}
          </ul>

          <h3 className={"my-2 font-bold"}>Further knowledge</h3>
          <ul className={"flex items-center gap-2 my-2 font-mono flex-wrap"}>
            {furtherData.map((etc) => {
              return (
                <li key={etc.id}>
                  <Chip className={"flex items-center gap-x-2"}>
                    {etc.Icon ? <etc.Icon /> : null}
                    {etc.value}
                    <span className={"bg-background-10 px-1"}>{etc.level}</span>
                  </Chip>
                </li>
              );
            })}
          </ul>

          <p className={"float-right text-slate-500 mt-2"}>
            Each skill has a knowledge level. Levels spans from 0 to 10
          </p>
        </article>
      </main>
    </section>
  );
}
