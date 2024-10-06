interface BrandProps {
  isDark?: boolean;
  className?: string;
}

export function Brand(props: BrandProps) {
  const { isDark, className } = props;

  return (
    <a
      href="/"
      className={`text-2xl transition-[padding] font-mono ${
        isDark ? "text-white" : "text-black"
      } ${className ? className : ""}`}
    >
      Asqit.<span className={"text-primary-5 font-black"}>dev</span>
    </a>
  );
}
