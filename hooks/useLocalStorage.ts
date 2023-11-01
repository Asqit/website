import { installGlobals } from "https://deno.land/x/virtualstorage@0.1.0/mod.ts";
import { useState, useEffect } from "preact/hooks";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {¨
  installGlobals();
  const [value, setValue] = useState<T>(() => {
    const jsonValue = self.localStorage.getItem(key);

    if (jsonValue == null) {
      if (typeof initialValue === "function") {
        return (initialValue as () => T)();
      } else {
        return initialValue;
      }
    } else {
      return JSON.parse(jsonValue);
    }
  });

  useEffect(() => {
    self.localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as [T, typeof setValue];
}
