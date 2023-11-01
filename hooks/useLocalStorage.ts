import { useState, useEffect } from "preact/hooks";

/**
 * ## DO_NOT_USE_FOR_PRODUCTION!!!
 * 
 * Deno deploy does not support `localStorage` API and so 
 * this will cause internal server error
 */
export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {¨
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
