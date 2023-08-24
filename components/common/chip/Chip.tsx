import { JSX } from "preact/jsx-runtime";

interface ChipProps extends JSX.HTMLAttributes<HTMLSpanElement> {
  children: JSX.Element;
}

export function Chip(props: ChipProps) {
  const { children, className, ...rest } = props;

  return (
    <span
      {...rest}
      className={`rounded-md py-1 px-2 bg-background-0 dark:bg-background-0-dark text-black dark:text-white font-mono ${
        className ? className : ""
      }`}
    >
      {children}
    </span>
  );
}
