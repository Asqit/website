import { Emoji } from "../components/index.ts";
import { State } from "../routes/_middleware.tsx";

const Language = (data: { lang: State["lang"] }) => {
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
        ? <Emoji label="EN" symbol="🇬🇧" />
        : <Emoji symbol="🇨🇿" label="CZ" />}
    </button>
  );
};
export default Language;
