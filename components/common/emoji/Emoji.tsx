import { JSX } from "preact/jsx-runtime";

interface EmojiProps extends JSX.HTMLAttributes<HTMLSpanElement> {
  label?: string;
  symbol: string;
}

const Emoji = (props: EmojiProps) => {
  const { symbol, label, ...rest } = props;

  return (
    <span
      role="img"
      aria-label={label ? label : "emoji symbol"}
      aria-hidden={label ? "false" : "true"}
      {...rest}
    >
      {symbol}
    </span>
  );
};

export { Emoji };
