export function Brand() {
  return (
    <a href="/" className={"flex gap-x-2 items-center group"}>
      <div
        className={"w-[1.25rem] group-hover:animate-rotate aspect-square rounded-full bg-gradient-to-br from-primary-10 via-primary-0 to-sky-500"}
      />
      <h1 className={"text-2xl text-white font-semibold"}>Tuček</h1>
    </a>
  );
}
