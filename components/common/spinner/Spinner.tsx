import { FaSpinner } from "react-icons/fa";

export function Spinner() {
  return (
    <div className={"w-full h-full flex items-center justify-center"}>
      <FaSpinner className={"text-4xl animate-spin text-white"} />
    </div>
  );
}
