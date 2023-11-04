import { useState, useEffect } from "preact/hooks";
import { LocalStorage } from "../utils/localStorage.ts";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState<T>();

  useEffect(() => {
    (async function loadInitialValue() {
      try {
        const jsonValue = await LocalStorage.getItem(key);

        if (jsonValue == null) {
          if (typeof initialValue === "function") {
            setValue((initialValue as () => T)());
          } else {
            setValue(initialValue);
          }
        } else {
          setValue(JSON.parse(jsonValue));
        }
      } catch (error) {
        console.error("Failed to read data from the KV:", error);
      }
    })();
  }, [key, initialValue]);

  useEffect(() => {
    (async function updateStorage() {
      await LocalStorage.setItem(key, JSON.stringify(value));
    })();
  }, [value, key]);

  return [value, setValue] as [T, typeof setValue];
}
