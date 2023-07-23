import { FaChevronRight } from "react-icons/fa";
import { JSX } from "preact/jsx-runtime";

interface AccordionProps extends JSX.HTMLAttributes<HTMLElement> {
  children: JSX.Element;
  title: string;
}

/**
 * @description Server-side friendly accordion component.
 */
export function Accordion(props: AccordionProps) {
  const { children, title, ...rest } = props;

  return (
    <article
      className={"overflow-hidden rounded-md backdrop-blur-md flex items-start flex-col border border-background-5"}
      {...rest}
    >
      <input type="checkbox" className={"hidden peer"} id={title} />
      <label
        htmlFor={title}
        className={"flex flex-grow w-full gap-x-4 items-center transition-colors justify-center font-semibold md:bg-background-10 bg-background-5 p-2 cursor-pointer hover:bg-background-5 peer-checked:bg-background-0"}
      >
        {title}
      </label>
      <FaChevronRight
        className={"transition-transform duration-300 peer-checked:rotate-90 absolute top-3 right-8"}
      />
      <main
        className={"max-h-0 transition-[max-height] duration-300 px-2 peer-checked:max-h-screen bg-background-0/40"}
      >
        {children}
      </main>
    </article>
  );
}
