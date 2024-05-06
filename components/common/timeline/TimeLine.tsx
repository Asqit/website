import type { JSX } from "preact/jsx-runtime";
import classNames from "npm:classnames";

interface Props {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export function TimeLine({ children, className }: Props) {
  return (
    <ol className={classNames("relative border-l border-primary-5", className)}>
      {children}
    </ol>
  );
}

TimeLine.Item = function ({ children }: Props) {
  return (
    <li class="mb-10 ml-4">
      <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-primary-5 dark:bg-primary-5" />
      {children}
    </li>
  );
};
