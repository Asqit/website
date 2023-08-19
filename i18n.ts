import i18next from "https://deno.land/x/i18next/index.js";

import czech from "./data/locales/cs_cz.json" assert {
  type: "json",
};

import english from "./data/locales/en_us.json" assert {
  type: "json",
};

i18next.init({
  fallback: "en",
  resources: {
    en: {
      translation: english,
    },
    cs: {
      translation: czech,
    },
  },
});

export default function (lng: string | undefined | null) {
  i18next.getFixedT(lng);
}
