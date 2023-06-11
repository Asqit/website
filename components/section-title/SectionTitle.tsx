interface SectionTitleProps {
  value: string;
}

export function SectionTitle(props: SectionTitleProps) {
  const { value } = props;

  return (
    <div className={"my-4 mb-8 flex items-center gap-x-2"}>
      <h1 className={"font-black inline text-5xl"}>
        {value}
      </h1>
      <div
        className={"sm:hidden md:block h-[2px] bg-primary-10 flex-grow"}
      />
    </div>
  );
}
