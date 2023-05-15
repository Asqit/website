interface ChipProps {
  children: string;
}

export function Chip(props: ChipProps) {
  const { children } = props;

  return (
    <span
      className={"rounded-md p-2 bg-background-0 border border-background-10 text-white font-semibold font-mono"}
    >
      {children}
    </span>
  );
}
