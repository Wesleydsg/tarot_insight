import { useEffect, useState, useTransition } from "react";

export function useAction<T>(
  init: T,
  action: () => Promise<T>,
  deps: any[],
): [T, boolean] {
  const [pending, transition] = useTransition();
  const [state, setState] = useState<T>(init);
  var canceled = false;
  useEffect(() => {
    transition(async () => {
      action().then((e) => (canceled ? null : setState(e)));
    });
    return () => {
      canceled = true;
    };
  }, deps);
  return [state, pending];
}
