import { asset } from "$fresh/runtime.ts";

export default function AuthorImage() {
  return (
    <figure className="max-w-md relative z-40 flex-[0_0_45%] mx-auto rounded-lg before:-z-10 before:-translate-x-4 before:rotate-3 before:transition-all before:w-full xl:before:h-full xl:before:border-8 xl:before:rounded-lg xl:before:border-primary-10 xl:before:absolute xl:before:top-6 xl:before:left-6">
      <span className="absolute bottom-2 right-2 text-white z-[1000] bg-black/40 px-2 py-1 backdrop-blur-sm rounded-md">
        Apulia, Italy 2022
      </span>
      <div className="overflow-hidden rounded-lg object-cover transition-all">
        <img
          loading="lazy"
          src={asset("images/andy.webp")}
          alt="Image of author standing in from of sea horizon"
          width={600}
          height={337}
        />
      </div>
    </figure>
  );
}
