import { JSX } from "preact/jsx-runtime";

interface ChipProps extends JSX.HTMLAttributes<HTMLSpanElement> {
  children: JSX.Element | string;
}

export function Chip(props: ChipProps) {
  const { children, className, ...rest } = props;

  return (
    <span
      {...rest}
      className={`rounded-md py-1 px-2 bg-background-0 border-b-2 border-b-slate-950 text-white font-mono ${
        className ? className : ""
      }`}
    >
      {children}
    </span>
  );
}
