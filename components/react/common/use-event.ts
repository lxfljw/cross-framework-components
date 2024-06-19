import { useEffect } from "react";

export default function useEvent(
  props: any,
  ref: React.MutableRefObject<any>,
  events: string[]
) {
  const fnList: ((...args: any) => any)[] = [];
  useEffect(() => {
    events.forEach((event) => {
      const fn = (...args: any[]) => {
        props[event](...args);
      };
      fnList.push(fn);
      ref.current.addEventListener(event, fn);
    });
  }, []);
  return function unListen() {
    fnList.forEach((fn, index) => {
      ref.current.removeEventListener(events[index], fn);
    });
  };
}
