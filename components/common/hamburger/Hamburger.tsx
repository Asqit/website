interface IHamburgerProps {
  isOpen: boolean;
  onClick: () => void;
  containerClassName?: string;
}

export function Hamburger(props: IHamburgerProps) {
  const { isOpen, onClick, containerClassName } = props;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      aria-label={"Hamburger menu"}
      title="hamburger button"
      onClick={handleClick}
      className={`w-8 h-8 flex justify-around flex-col flex-wrap z-10 cursor-pointer ${containerClassName}`}
    >
      <span
        className={`dark:bg-slate-200 bg-slate-600 block w-8 h-[0.35rem] rounded transition-all origin-[1px] ${
          isOpen ? "rotate-45" : "rotate-0"
        }`}
      />
      <span
        className={`block w-8 h-[0.35rem] rounded transition-all origin-[1px] ${
          isOpen
            ? "translate-x-full bg-transparent"
            : "translate-x-0 dark:bg-slate-200 bg-slate-600"
        }`}
      />
      <span
        className={`dark:bg-slate-200 bg-slate-600 block w-8 h-[0.35rem] rounded transition-all origin-[1px] ${
          isOpen ? "rotate-[-45deg]" : "rotate-0"
        }`}
      />
    </button>
  );
}
