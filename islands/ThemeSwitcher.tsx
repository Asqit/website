interface ThemeSwitcherProps {
  isDarkMode: boolean;
  toggleMode: () => void;
}

export default function ThemeSwitcher(props: ThemeSwitcherProps) {
  const { isDarkMode, toggleMode } = props;

  return (
    <button
      onClick={toggleMode}
      className={`bg-transparent relative transition-all duration-300 w-[100px] rounded-full border ${
        isDarkMode ? "rotate-180 border-white" : "rotate-0 border-black"
      }`}
    >
      <span
        className={`absolute bottom-0 left-1/2 -translate-x-1/2  transition-colors duration-300 ${
          isDarkMode ? "text-white rotate-180" : "text-black"
        }`}
      >
        {isDarkMode ? "Light" : "Dark"}
      </span>
      <span className={"text-transparent"}>light</span>
    </button>
  );
}
