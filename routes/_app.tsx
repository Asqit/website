import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/src/server/types.ts";

export default function App(props: AppProps) {
  const { Component } = props;

  return (
    <html lang={"en"}>
      <Head>
        <title>
          Ondřej Tuček - Full-Stack web developer 👨‍💻 from Czech Republic 🇨🇿
        </title>
        <link rel="icon" type="image/ico" href="../images/favicon.ico" />
        <link rel="stylesheet" href="../styles/tailwind.css" />
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
        <Component />
      </body>
    </html>
  );
}
"";
