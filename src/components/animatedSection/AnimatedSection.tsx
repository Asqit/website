import { ReactNode, useRef } from "react";
import { useIntersectionObserver, useMediaQuery } from "~/hooks";

interface IAnimatedSectionProps {
  children: ReactNode;
  isEven?: boolean;
  isOnce?: boolean;
}

export function AnimatedSection(props: IAnimatedSectionProps) {
  const { children, isEven, isOnce } = props;
  const ref = useRef<HTMLDivElement | null>(null);

  const entry = useIntersectionObserver(ref, {
    freezeOnceVisible: isOnce ?? true,
  });

  const isVisible = !!entry?.isIntersecting;
  const isDesktop = useMediaQuery("(min-width: 992px)");
  const animation = isEven ? "animate-bounce-left" : "animate-bounce-right";

  return (
    <section
      ref={ref}
      className={`min-h-screen ${
        isVisible && isDesktop ? animation : "animate-none"
      } motion-reduce:animate-none `}
    >
      {children}
    </section>
  );
}

AnimatedSection.defaultProps = {
  isEven: false,
};
