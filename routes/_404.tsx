import { Button } from "../components/index.ts";
import { PageProps } from "$fresh/server.ts";

export default function NotFound(props: PageProps) {
  return (
    <section className={"w-full h-screen"}>
      <article
        className={"h-full container mx-auto flex flex-col items-center justify-center gap-4 text-slate-300"}
      >
        <h1
          className={"text-6xl font-black font-mono"}
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
  );
}
