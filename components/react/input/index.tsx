import React, { useEffect, useRef } from "react";
import useEvent from "../common/use-event";
import "web-comp/input/index.js";

export default function Input(props) {
  const inputRef = useRef();
  const unListen = useEvent(props, inputRef, ["change"]);
  useEffect(() => {
    return () => {
      unListen();
    };
  }, []);
  return (
    <div>
      <c-input ref={inputRef}></c-input>
    </div>
  );
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "c-input": any;
    }
  }
}
