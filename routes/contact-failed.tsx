import { FaEnvelope } from "react-icons/fa";
import { Button, Footer, Navbar } from "../components/index.ts";

export default function ContactSuccessful() {
  return (
    <>
      <Navbar />
      <section
        className={"bg-gradient-to-br from-special-red via-background-10 to-background-0 px-4"}
      >
        <div
          className={"container mx-auto max-w-7xl py-32 min-h-[80vh] text-white text-center flex flex-col items-center justify-center gap-2"}
        >
          <h1 className={"text-7xl text-primary-10 mb-8"}>
            <FaEnvelope />
          </h1>
          <h2 className={"text-2xl md:text-4xl font-semibold capitalize"}>
            Oh No! Postman failed!
          </h2>
          <p className={"max-w-lg"}>
            Sadly, you email has been lost, but don't be sad just yet. If you
            really want to send me an email, you can do so directly by your own
            email manager{" "}
            <a
              target="blank"
              rel="author"
              className={"text-primary-10 underline"}
              aria-label={"link to your email manager"}
              href="mailto:ondrejtucek9@gmail.com"
              title={"open in your email manager"}
            >
              ondrejtucek9@gmail.com
            </a>
          </p>
          <Button>
            <a href="/">Go Home</a>
          </Button>
        </div>
      </section>
      <Footer />
    </>
  );
}
