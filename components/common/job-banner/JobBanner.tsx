import { constants } from "../../../utils/constants.ts";
import { match } from "npm:ts-pattern";
import classnames from "npm:classnames";

export function JobBanner() {
  const { isLookingForJob } = constants;

  return (
    <div
      className={"p-2 rounded-xl inline-block bg-accent-10 dark:bg-background-10 cursor-help"}
      title={"My current job status"}
    >
      <div className={"flex items-center justify-center gap-x-2 font-mono"}>
        <div
          className={classnames(
            "w-4 h-4 rounded-full inline-block flex-shrink-0",
            match(isLookingForJob)
              .with("yes", () => "bg-emerald-500")
              .with("maybe", () => "bg-sky-500")
              .with("no", () => "bg-red-500")
              .exhaustive(),
          )}
        />
        <span>
          {match(isLookingForJob)
            .with("yes", () =>
              "eager to find a new role, available to start promptly.")
            .with("maybe", () =>
              "exploring opportunities if they are compelling and aligned.")
            .with("no", () =>
              "currently satisfied in my current position.")
            .exhaustive()}
        </span>
      </div>
    </div>
  );
}
