import { useEffect, useRef } from "react";
import useEvent from "../common/use-event";
import "@crossui/web-components/input/index.js";

export default function Input(props) {
  const inputRef = useRef();
  const unListen = useEvent(props, inputRef, ["change"]);
  useEffect(() => {
    return () => {
      unListen();
    };
  }, []);
  return <c-input ref={inputRef}></c-input>;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "c-input": any;
    }
  }
}
