import { useState, useEffect } from "preact/hooks";

export function useMediaQuery(condition: string) {
  const [match, setMatch] = useState<boolean>(false);

  useEffect(() => {
    if (self.matchMedia(condition).matches) {
      setMatch((_) => true);
    } else {
      setMatch((_) => false);
    }
  }, [condition]);

  return match;
}
