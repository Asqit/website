import { asset } from "$fresh/runtime.ts";
import { Polaroid } from "../polaroid/Polaroid.tsx";

export default function AuthorImage() {
  return (
    <figure className="max-w-md relative z-40 flex-[0_0_45%] mx-auto">
      <div className="transition-all relative group w-[350px] aspect-[9/16]">
        <Polaroid
          loading="lazy"
          alt={"Ondřej in forest"}
          src={asset("images/andy.webp")}
          className={`top-0 left-0 z-20 transition-all group-hover:z-10 group-hover:-rotate-2`}
        />
        <Polaroid
          loading="lazy"
          alt={"Ondřej in Divoká Šárka"}
          src={asset("images/andy-2.webp")}
          className={`hidden sm:block z-10 top-6 left-6 transition-all ease-in-out rotate-6 group-hover:-top-6 group-hover:left-0 group-hover:z-20 group-hover:rotate-2`}
        />
      </div>
    </figure>
  );
}
