import { useEffect, useState } from 'react';

export const useDebounce = <T>(value: T, milliSeconds: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, milliSeconds);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, milliSeconds]);

  return debouncedValue;
};
