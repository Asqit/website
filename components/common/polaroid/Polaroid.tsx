import { JSX } from "preact/jsx-runtime";
import classNames from "npm:classnames";

interface Props extends JSX.HTMLAttributes<HTMLImageElement> {
}

export function Polaroid(props: Props) {
  const { className, ...rest } = props;

  return (
    <figure
      className={classNames(
        "absolute bg-base-100 p-3 pb-12 shadow-md w-full h-full",
        className,
      )}
      style={{
        backgroundImage: `url("/images/texture.png")`,
        backgroundSize: "auto",
        backgroundRepeat: "repeat",
      }}
    >
      <img
        src={rest.src}
        className={"w-full h-full object-cover shadow-inner"}
        {...rest}
      />
    </figure>
  );
}
