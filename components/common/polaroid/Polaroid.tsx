import { JSX } from "preact/jsx-runtime";
import classNames from "npm:classnames";
import { asset } from "$fresh/runtime.ts";

interface Props extends JSX.HTMLAttributes<HTMLImageElement> {
  caption?: string;
  captionClassName?: string;
}

export function Polaroid(props: Props) {
  const { className, captionClassName, caption, ...rest } = props;

  return (
    <figure
      className={classNames(
        "absolute bg-white p-3 pb-12 shadow-md w-full h-full",
        className,
      )}
    >
      <img
        src={asset(`${rest.src}`)}
        className={"w-full h-full object-cover sepia-70 contrast-[110%] saturate-[110%] hue-rotate-[342deg]"}
        {...rest}
      />
      {caption && (
        <figcaption
          className={classNames(
            "absolute bottom-16 right-8 p-2 text-center text-white font-black -rotate-12",
            captionClassName,
          )}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
