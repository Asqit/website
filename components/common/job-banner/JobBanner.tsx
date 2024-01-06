import { constants } from "../../../utils/constants.ts";

export function JobBanner() {
  return (
    <div
      className={"p-2 rounded-xl inline-flex items-center justify-center gap-x-2 bg-background-10 dark:bg-background-10-dark"}
    >
      <div
        className={`w-4 h-4 rounded-full ${
          constants.isLookingForJob
            ? "bg-emerald-400 animate-pulse"
            : "bg-red-500"
        } inline-block`}
      />
      <span>
        {constants.isLookingForJob
          ? "Currently looking for work"
          : "Currently busy working"}
      </span>
    </div>
  );
}
