import { JSX } from "preact/jsx-runtime";
import { Ps1 } from "../ps1/Ps1.tsx";
import { useState } from "preact/hooks";

export function Prompt() {
  const [value, setValue] = useState<string>("");
  const [history, setHistory] = useState<[number, string][]>([]);

  const handleSubmit = (e: KeyboardEvent) => {
    const key = e.key;

    switch (key) {
      case "Enter":
        setHistory((prev) => [...prev, [prev[prev.length - 1][0]++, value]]);
        setValue("");
        break;
      case "ArrowUp":
        setValue(history[history.length - 1][1]);
        break;
      case "ArrowDown":
        break;
    }
  };

  return (
    <div className={"text-white flex gap-1"}>
      <label>
        <Ps1 />
      </label>
      <input
        onChange={(e) => setValue(e.currentTarget.value)}
        onKeyDown={handleSubmit}
        value={value}
        className="focus:outline-none bg-transparent"
        aria-label="prompt"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        autofocus
      />
    </div>
  );
}
