import { FaEnvelope } from "react-icons/fa";
import { Button } from "../components/index.ts";

export default function ContactSuccessful() {
  return (
    <section
      className={"bg-gradient-to-br from-primary-0 via-background-10 dark:via-background-10-dark to-background-0 dark:to-background-0-dark"}
    >
      <div
        className={"container mx-auto max-w-7xl p-32 min-h-[80vh] text-white text-center flex flex-col items-center justify-center gap-2"}
      >
        <h1 className={"text-7xl text-primary-10 mb-8"}>
          <FaEnvelope />
        </h1>
        <h2 className={"text-4xl font-semibold"}>
          Great! Your message was send
        </h2>
        <p className={"max-w-lg"}>
          Your email was send to my email address and now is waiting for me to
          be open. I please you for patience, I check my emails on daily basis,
          but only on morning and evening.
        </p>
        <Button>
          <a href="/">Go Home</a>
        </Button>
      </div>
    </section>
  );
}
