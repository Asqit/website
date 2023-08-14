import { useEffect, useRef } from "preact/hooks";

function followMouse(event: MouseEvent, mouse: HTMLDivElement) {
  const x = event.pageX;
  const y = event.pageY;

  mouse.animate(
    {
      left: x + "px",
      top: y + "px",
    },
    { duration: 300, fill: "forwards" },
  );
}

export default function SphereFollower() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (innerWidth >= 768) {
      self.addEventListener("mousemove", (e) => {
        if (ref.current) {
          followMouse(e, ref.current);
        }
      });
    }
  }, [ref]);

  const style = {
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    position: "absolute",
    zIndex: "-1",
    top: "50%",
    left: "50%",
    translate: "-50% -50%",
    animation: "rotate 8s infinite",
  };

  return (
    <div
      ref={ref}
      className={"bg-gradient-to-bl from-special-red to-primary-5 animate-sphere-rotate"}
      style={style}
    />
  );
}
