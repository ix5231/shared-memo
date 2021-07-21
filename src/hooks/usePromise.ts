import { useState, useEffect } from "react";

export const usePromise = <T, E = unknown>(
  promiseSupply?: () => Promise<T>,
  deps?: unknown[]
): [T | undefined, boolean, boolean, E | undefined] => {
  const [result, setResult] = useState<T | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<E | undefined>(undefined);
  const isErrorOccured = !!error;

  useEffect(() => {
    if (promiseSupply) {
      promiseSupply()
        .then((d) => {
          setIsLoading(false);
          setResult(d);
        })
        .catch((e) => setError(e));
    } else {
      setIsLoading(false);
      setResult(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [result, isLoading, isErrorOccured, error];
};
