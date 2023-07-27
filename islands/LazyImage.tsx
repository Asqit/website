import { useEffect, useState } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";

interface LazyImageProps extends JSX.HTMLAttributes<HTMLImageElement> {
  src: string;
}

export default function LazyImage(props: LazyImageProps) {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);

  useEffect(() => {
    setLoadedSrc(null);
    if (props.src) {
      const handleLoad = () => {
        setLoadedSrc(props.src);
      };

      const image = new Image();

      image.addEventListener("load", handleLoad);
      image.src = props.src;

      return () => {
        image.removeEventListener("load", handleLoad);
      };
    }
  }, [props.src]);

  if (loadedSrc === props.src) {
    return <img {...props} />;
  }

  return (
    <div className="min-w-[400px] w-full aspect-video bg-slate-700 animate-pulse rounded-md" />
  );
}
