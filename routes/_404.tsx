import { Button, Footer } from "../components/index.ts";
import { UnknownPageProps } from "$fresh/server.ts";
import Navbar from "../islands/Navbar.tsx";

export default function NotFound(props: UnknownPageProps) {
  const { url } = props;

  return (
    <>
      <Navbar />
      <section className={"w-full h-screen"}>
        <article
          className={"h-full container mx-auto flex flex-col items-center justify-center gap-4 text-slate-300"}
        >
          <h1
            className={"text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary-10 via-primary-0 to-sky-500"}
          >
            404
          </h1>
          <h2 className={"text-3xl font-bold"}>
            Page not found
          </h2>
          <p className={"text-lg max-w-xs text-center"}>
            The page you are looking for was either removed or is temporarily
            unavailable
          </p>
          <Button>
            <a href="/">Go home</a>
          </Button>
        </article>
      </section>
      <Footer />
    </>
  );
}
