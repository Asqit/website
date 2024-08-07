import { asset, Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/src/server/types.ts";
import { useSignal } from "@preact/signals";
import { Footer } from "../components/index.ts";
import Navbar from "../islands/Navbar.tsx";
import { LanguageState } from "../utils/type.index.ts";

export default function App(props: PageProps) {
  const { Component } = props;

  const language = props.state.lang as LanguageState["lang"];
  const translation = props.state.translation as LanguageState["translation"];

  /** signal used to mark current color scheme */
  const darkModeSignal = useSignal<"light" | "dark">("light");

  return (
    <html lang={"en"}>
      <Head>
        <title>
          Ondřej Tuček - Full-Stack web developer 👨‍💻 from Czech Republic 🇨🇿
        </title>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/ico" href="../images/favicon.ico" />
        <link rel="stylesheet" href={asset("/styles.css")} />
        <meta lang={"en"} />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="A website about Ondřej Tuček and his expertise in the field of IT, specifically Web Development."
        />
        <meta
          name="keywords"
          content="portfolio, Ondřej Tuček, Full-Stack developer, Czech Republic, HTML, CSS, JavaScript, React, Next.js"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Ondřej Tuček" />
      </Head>
      <body className={"antialiased"}>
        <Navbar
          darkModeSignal={darkModeSignal}
          lang={language}
          translation={translation["navbar"]}
        />
        <Component />
        <Footer lang={translation["hero"]} />
      </body>
    </html>
  );
}
