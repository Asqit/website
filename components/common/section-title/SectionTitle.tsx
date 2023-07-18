interface SectionTitleProps {
  value: string;
}

export function SectionTitle(props: SectionTitleProps) {
  const { value } = props;

  return (
    <div className={"my-4 mb-8"}>
      <h1
        className={"font-black inline text-5xl relative before:absolute before:bg-primary-10 before:w-full before:h-[5px] before:-skew-x-[45deg]  before:-bottom-1"}
      >
        {value}
      </h1>
    </div>
  );
}
