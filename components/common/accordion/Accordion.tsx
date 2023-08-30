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
      {...rest}
      className={"overflow-hidden rounded-md backdrop-blur-md flex items-start flex-col border border-background-5 dark:border-background-10-dark"}
    >
      <input type="checkbox" className={"hidden peer"} id={title} />
      <label
        htmlFor={title}
        className={"flex flex-grow w-full gap-x-4 items-center transition-colors justify-center font-semibold bg-background-0 dark:bg-background-0-dark p-2 cursor-pointer peer-checked:bg-background-0 dark:peer-checked:bg-background-0-dark"}
      >
        {title}
      </label>
      <FaChevronRight
        className={"transition-transform duration-300 peer-checked:rotate-90 absolute top-3 right-8 pointer-events-none"}
      />
      <main
        className={"max-h-0 w-full transition-[max-height] duration-300 px-2 peer-checked:max-h-screen bg-background-0/40 dark:bg-background-0-dark/40"}
      >
        {children}
      </main>
    </article>
  );
}
