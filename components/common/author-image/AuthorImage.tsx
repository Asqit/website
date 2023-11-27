import { asset } from "$fresh/runtime.ts";

export default function AuthorImage() {
  return (
    <figure className="max-w-md relative z-40 flex-[0_0_45%] mx-auto">
      <div className="object-center transition-all relative group w-[350px] aspect-[9/16]">
        <img
          loading="lazy"
          src={asset("images/andy.webp")}
          alt="Ondřej's trip to vyšehrad posing in front of view of the magical Prague"
          className={`
            absolute
            bg-white
            p-2
            pb-12
            shadow-md
            w-full
            h-full
            object-cover 
            top-0 
            left-0 
            z-20 
            transition-all  
            group-hover:z-10 
            group-hover:-rotate-2
            sepia-70 
            contrast-[110%]
            saturate-[110%]
            hue-rotate-[342deg]
          `}
        />
        <img
          loading="lazy"
          src={asset("images/tunisia.webp")}
          alt="Ondřej standing in elevator"
          className={`
            hidden
            sm:block
            absolute
            bg-white
            p-2
            pb-12
            w-full
            h-full 
            object-cover
            shadow-md
            z-10 
            top-6 
            left-6 
            transition-all 
            ease-in-out
            rotate-6  
            group-hover:-top-6
            group-hover:left-0
            group-hover:z-20 g
            group-hover:rotate-2
            sepia-70 
            contrast-[110%]
            saturate-[110%]
            hue-rotate-[342deg]
          `}
        />
      </div>
    </figure>
  );
}
