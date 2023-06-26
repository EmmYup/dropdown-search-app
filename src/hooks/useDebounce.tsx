import { useState, useEffect, useRef } from 'react';

export function useDebounce(value: string, delay: number): string {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const handler = useRef(null);

  useEffect(() => {
    // @ts-ignore
    clearTimeout(handler.current);
    // @ts-ignore
    handler.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      // @ts-ignore
      clearTimeout(handler.current);
    };
  }, [value, delay]);

  return debouncedValue;
}
