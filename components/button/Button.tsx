import { JSX } from "preact/jsx-runtime";

interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  Icon?: () => JSX.Element;
  children: string | JSX.Element;
}

function Button(props: ButtonProps) {
  const { Icon, className, children, ...rest } = props;

  return (
    <button
      className={`btn ${
        Icon ? "flex items-center justify-center gap-2" : ""
      } ${className}`}
      {...rest}
    >
      {Icon ? <Icon /> : null}
      {children}
    </button>
  );
}

export { Button };
