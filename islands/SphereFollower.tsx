import { useEffect, useMemo, useRef } from "preact/hooks";

interface SphereFollowerProps {
  isEnabled: boolean;
}

export default function SphereFollower(props: SphereFollowerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { isEnabled } = props;

  if (!isEnabled) {
    return null;
  }

  const handleMouseMove = (e: MouseEvent, mouse: HTMLDivElement) => {
    const x = e.pageX;
    const y = e.pageY;

    mouse.animate(
      {
        left: x + "px",
        top: y + "px",
      },
      { duration: 1800, fill: "forwards" },
    );
  };

  const optimizedHandleMouseMove = useMemo(
    () => handleMouseMove,
    [],
  );

  useEffect(() => {
    if (innerWidth >= 768) {
      const handleMouseMoveWrapper = (e: MouseEvent) => {
        if (ref.current) {
          optimizedHandleMouseMove(e, ref.current);
        }
      };

      self.addEventListener("mousemove", handleMouseMoveWrapper);

      return () => {
        self.removeEventListener("mousemove", handleMouseMoveWrapper);
      };
    }
  }, [ref, optimizedHandleMouseMove]);

  const style = {
    width: "800px",
    height: "800px",
    borderRadius: "50%",
    position: "absolute",
    zIndex: "-1",
    top: "50%",
    left: "50%",
    translate: "-50% -50%",
  };

  return (
    <div
      ref={ref}
      className={"bg-gradient-to-bl from-special-red to-primary-5 animate-sphere-rotate"}
      style={style}
    />
  );
}
