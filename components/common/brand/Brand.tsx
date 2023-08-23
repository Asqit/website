interface BrandProps {
  isDark?: boolean;
}

export function Brand(props: BrandProps) {
  const { isDark } = props;

  return (
    <a
      href="/"
      className={`text-2xl transition-[padding] ${
        isDark ? "text-white" : "text-black"
      } font-semibold font-mono`}
    >
      Asqit.<span className={"text-primary-5"}>dev</span>
    </a>
  );
}
