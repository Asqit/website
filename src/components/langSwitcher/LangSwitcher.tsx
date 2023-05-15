import { useTranslation } from "react-i18next";
import Emoji from "../emoji/Emoji";

const langs = [
  { emoji: "🇬🇧", id: 0, shortCut: "en", name: "English" },
  { emoji: "🇨🇿", id: 1, shortCut: "cz", name: "Čeština" },
];

export default function LangSwitcher() {
  const { i18n } = useTranslation();

  return (
    <li className="flex items-center justify-start absolute bottom-4 md:static md:ml-4 md:justify-center gap-x-6 md:gap-x-2 flex-wrap">
      {langs.map((lng) => (
        <button
          type="submit"
          key={lng.id}
          onClick={() => i18n.changeLanguage(lng.shortCut)}
          disabled={i18n.resolvedLanguage === lng.shortCut}
          className="text-4xl md:text-lg text-gray-400 disabled:opacity-50"
        >
          <Emoji symbol={lng.emoji} label={lng.name} />
        </button>
      ))}
    </li>
  );
}
