import { useEffect, useRef } from "preact/hooks";

function followMouse(event: MouseEvent, mouse: HTMLDivElement) {
  const x = event.pageX;
  const y = event.pageY;

  mouse.animate(
    {
      left: x + "px",
      top: y + "px",
    },
    { duration: 0, fill: "forwards" },
  );
}

export default function MouseFollower() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    self.onmousemove = (e) => {
      if (e && e.currentTarget) {
        if (ref.current) {
          ref.current.style.setProperty("--sphere-x", e.clientX + "px");
          ref.current.style.setProperty("--sphere-y", e.clientY + "px");
        }
      }
    };
  }, [ref]);

  const style = {
    top: "50%",
    left: "50%",
    translate: "-50% -50%",
  };

  return (
    <div
      ref={ref}
      id="MOUSE_FOLLOWER"
      className={"z-30 pointer-events-none fixed inset-0 w-screen h-screen"}
      style={style}
    />
  );
}
