import AuthorImage from "../../common/author-image/AuthorImage.tsx";
import { SectionTitle } from "../../common/section-title/SectionTitle.tsx";

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
      </main>
    </section>
  );
}
