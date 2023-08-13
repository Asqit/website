import { Footer, Navbar } from "../components/index.ts";
import { ErrorPageProps } from "$fresh/server.ts";

export default function ServerFailure(props: ErrorPageProps) {
  const { error } = props;

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
            500
          </h1>
          <h2 className={"text-3xl font-bold"}>
            Internal Server Error
          </h2>
          <p className={"text-lg max-w-xs text-center"}>
            The server has died died with message:{" "}
            <code>{(error as Error).message}</code>
          </p>
        </article>
      </section>
      <Footer />
    </>
  );
}
