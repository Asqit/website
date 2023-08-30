import { asset } from "$fresh/runtime.ts";

export default function AuthorImage() {
  return (
    <figure className="max-w-md relative z-40 flex-[0_0_45%] mx-auto rounded-lg before:-z-10 before:-translate-x-4 before:rotate-3 before:transition-all before:w-full before:h-full before:border-8 before:rounded-lg before:border-primary-10 before:absolute before:top-6 before:left-6">
      <span className="absolute bottom-2 right-2 text-white z-[1000] bg-black/40 px-2 py-1 backdrop-blur-sm rounded-md">
        Apulia, Italy 2022
      </span>
      <div className="overflow-hidden rounded-lg object-cover transition-all">
        <img
          loading="lazy"
          src={asset("images/andy.webp")}
          alt="Ondřej standing in front of the mediterranean sea in Apulia, Italy"
          width={600}
          height={337}
        />
      </div>
    </figure>
  );
}
