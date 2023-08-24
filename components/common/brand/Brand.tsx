interface BrandProps {
  isDark?: boolean;
  className?: string;
}

export function Brand(props: BrandProps) {
  const { isDark, className } = props;

  return (
    <a
      href="/"
      className={`text-2xl transition-[padding] ${
        isDark ? "text-white" : "text-black"
      } font-semibold font-mono ${className ? className : ""}`}
    >
      Asqit.<span className={"text-primary-5"}>dev</span>
    </a>
  );
}
