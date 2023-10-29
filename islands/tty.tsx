import { Prompt } from "../components/tty/index.ts";

export default function TTY() {
  return (
    <main className={"bg-[#300a24] p-32 w-screen h-screen"}>
      <Prompt />
    </main>
  );
}
