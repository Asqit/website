interface SectionTitleProps {
  value: string;
}

export function SectionTitle(props: SectionTitleProps) {
  const { value } = props;

  return (
    <div className={"my-4 mb-8"}>
      <h1
        className={"font-black inline text-5xl relative before:absolute before:bg-primary-10 before:w-full before:h-[5px] before:-bottom-1 after:absolute after:bg-primary-0 after:w-full after:h-[5px] after:-bottom-1 after:left-0 after:z-[-1] after:rotate-3"}
      >
        {value}
      </h1>
    </div>
  );
}
