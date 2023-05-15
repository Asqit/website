interface IEmojiProps {
  label?: string;
  symbol: string;
}

const Emoji = (props: IEmojiProps) => {
  const { symbol, label } = props;

  return (
    <span
      className="emoji"
      role="img"
      aria-label={label ? label : "emoji symbol"}
      aria-hidden={label ? "false" : "true"}
    >
      {symbol}
    </span>
  );
};

export default Emoji;
