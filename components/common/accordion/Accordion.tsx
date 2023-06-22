import { JSX } from "preact/jsx-runtime";

interface AccordionProps {
  children: JSX.Element;
  title: string;
}

/**
 * @description This accordion component is server-side friendly thus does not
 * any `JavaScript` on runtime, meaning it's fast.
 */
export function Accordion(props: AccordionProps) {
  const { children, title } = props;

  return (
    <div
      className={"overflow-hidden rounded-md backdrop-blur-md flex flex-col border border-background-5"}
    >
      <input type="checkbox" className={"hidden peer"} id={title} />
      <label
        htmlFor={title}
        className={"flex flex-grow items-center justify-center font-semibold bg-background-10 p-2 cursor-pointer hover:bg-background-5 peer-checked:bg-background-0"}
      >
        {title}
      </label>
      <div
        className={"max-h-0 transition-all duration-500 px-2 peer-checked:p-2 peer-checked:max-h-screen bg-background-0/40"}
      >
        {children}
      </div>
    </div>
  );
}
