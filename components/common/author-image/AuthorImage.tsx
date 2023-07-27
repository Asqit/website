import { asset } from "$fresh/runtime.ts";
import LazyImage from "../../../islands/LazyImage.tsx";

export default function AuthorImage() {
  return (
    <figure className="group max-w-md flex-[0_0_45%] mx-auto rounded-lg bg-primary-10 hover:before:-translate-x-4 hover:before:rotate-3 before:transition-all relative before:w-full xl:before:h-full xl:before:border-8 xl:before:rounded-lg xl:before:border-teal-400 xl:before:absolute xl:before:top-6 xl:before:left-6">
      <span className="absolute bottom-2 right-2 text-white z-10">
        Apulia, Italy 2022
      </span>
      <div className="hidden md:flex absolute text-4xl font-bold top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex-col items-center justify-center">
        <span className="text-center">hover to zoom</span>
      </div>
      <div className="overflow-hidden rounded-lg object-cover transition-all">
        <LazyImage
          src={asset("images/andy.webp")}
          className="md:opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-150"
          loading={"eager"}
          alt="Image of author standing in from of sea horizon"
        />
      </div>
    </figure>
  );
}
