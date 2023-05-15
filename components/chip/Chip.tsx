import { JSX } from "preact/jsx-runtime";

interface ChipProps extends JSX.HTMLAttributes<HTMLSpanElement> {
  children: any;
}

export function Chip(props: ChipProps) {
  const { children, className, ...rest } = props;

  return (
    <span
      {...rest}
      className={`rounded-md p-2 bg-background-0 border border-background-10 text-white font-semibold font-mono ${
        className ? className : ""
      }`}
    >
      {children}
    </span>
  );
}
