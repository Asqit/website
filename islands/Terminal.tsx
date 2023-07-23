// Desired commands:
// --------------------
// 1) whoami
// 2) cat
// 3) ls
// 4) startX | startWayland

import { useState } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";
import { about } from "../data/about.ts";

type Command = "whoami" | "cat" | "ls" | "startX" | "startWayland";

/** Interactive shell-like command prompt */
export default function Terminal() {
  const [cmd, setCmd] = useState<string>("");
  const [output, setOutput] = useState<string | JSX.Element>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    switch (cmd as Command) {
      case "whoami":
        break;
      case "cat":
        break;
      case "ls":
        break;
      case "startWayland":
      case "startX":
        break;
      default:
        setOutput("Command not found");
        break;
    }
  };

  return (
    <article className={"font-mono text-green-600"}>
      <section>
        <h1 className={"text-red-400 font-black text-2xl"}>
          WARNING: Experimental page
        </h1>
        {output}
      </section>
      <form onSubmit={handleSubmit}>
        <label>viewer@asqit.deno.dev$</label>
        <input
          type={"text"}
          className={"bg-transparent outline outline-transparent px-4 w-fit min-w-[16px]"}
          onChange={(e) => setCmd(e.currentTarget.value)}
        />
        <span className={"animate-blink"}>█</span>
      </form>
    </article>
  );
}
