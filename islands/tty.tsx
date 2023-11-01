import { Prompt } from "../components/tty/index.ts";

export default function TTY() {
  return (
    <main className={"bg-[#300a24] p-32 w-screen h-screen font-mono"}>
      <div className="text-white text-lg font-bold">
        <h1>Whoa, hey! this page is not for public okay?</h1>
        <h2>Please leave now, as this page is purely experimental</h2>
      </div>
      <Prompt />
    </main>
  );
}
