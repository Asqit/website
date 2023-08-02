import { useEffect, useRef } from "preact/hooks";

interface MouseFollowerProps {
  isEnabled?: boolean;
}

export default function MouseFollower(props: MouseFollowerProps) {
  const { isEnabled } = props;
  const ref = useRef<HTMLDivElement>(null);

  if (!isEnabled) {
    return null;
  }

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
      className={"z-10 pointer-events-none fixed inset-0 w-screen h-screen"}
      style={style}
    />
  );
}
