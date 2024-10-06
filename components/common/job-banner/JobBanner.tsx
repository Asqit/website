import { constants } from "../../../utils/constants.ts";
import { match } from "ts-pattern";
import classnames from "classnames";

export function JobBanner() {
  const { jobBanner } = constants;

  return (
    <div
      className={"p-2 rounded-xl inline-flex items-center justify-center gap-x-2 bg-accent-10 dark:bg-background-10 font-mono text-sm font-medium"}
      title="my current work status"
    >
      <div
        className={classnames(
          "w-4 h-4 rounded-full outline",
          match(jobBanner)
            .with("YES", () => "bg-emerald-500 outline-emerald-700")
            .with("MAYBE", () => "bg-sky-500 outline-sky-700")
            .with("NO", () => "bg-red-500 outline-red-700")
            .exhaustive(),
        )}
      />

      <span>
        {match(jobBanner)
          .with("YES", () => "eager to find a new role")
          .with("MAYBE", () => "open to new opportunities")
          .with("NO", () => "currently satisfied in my current position.")
          .exhaustive()}
      </span>
    </div>
  );
}
