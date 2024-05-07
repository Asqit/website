import { Emoji } from "../components/index.ts";
import { LanguageState } from "../utils/type.index.ts";

const Language = (data: { lang: LanguageState["lang"] }) => {
  return (
    <button
      onClick={() => {
        (data.lang === "en")
          ? document.cookie = "lang=cs"
          : document.cookie = "lang=en";
        location.reload();
      }}
    >
      {data.lang === "en"
        ? <Emoji symbol="🇬🇧" label="EN" />
        : <Emoji symbol="🇨🇿" label="CZ" />}
    </button>
  );
};
export default Language;
