interface BrandProps {
  className?: string;
}

export function Brand(props: BrandProps) {
  const { className } = props;

  return (
    <a
      href="/"
      className={`text-2xl transition-[padding] font-semibold font-mono ${
        className ? className : ""
      }`}
    >
      Asqit.<span className={"text-primary"}>dev</span>
    </a>
  );
}
