import { useEffect, useRef } from 'react';

function useEvent(props, ref, events) {
  var fnList = [];
  useEffect(function () {
    events.forEach(function (event) {
      var fn = function fn() {
        props[event].apply(props, arguments);
      };
      fnList.push(fn);
      ref.current.addEventListener(event, fn);
    });
  }, []);
  return function unListen() {
    fnList.forEach(function (fn, index) {
      ref.current.removeEventListener(events[index], fn);
    });
  };
}

(function () {
  const template = document.createElement("template");
  template.innerHTML = `
  <style>
    input {
      border: 1px solid orange;
      width: 160px;
      height: 40px;
    }
  </style>
  <input id="c-input" placeholder="请输入内容" type="text">
`;
  class CInput extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({
        mode: "open"
      });
      const content = template.content.cloneNode(true);
      this._input = content.querySelector("#c-input");
      shadow.appendChild(content);
      this._input.addEventListener("input", e => {
        const {
          value
        } = e.target;
        this.value = value;
        this.dispatchEvent(new CustomEvent("change", {
          detail: value
        }));
      });
    }
    static get observedAttributes() {
      return ["value", "input"];
    }
    attributeChangedCallback(name, old, newVal) {
      this[name] = newVal;
      if (name === "value") {
        this._input.value = newVal;
      }
    }
    get value() {
      return this.getAttribute("value");
    }
    set value(n) {
      if (this.value === n) return;
      this.setAttribute("value", n);
    }
  }
  customElements.define("c-input", CInput);
})();

function Input(props) {
  var inputRef = useRef();
  var unListen = useEvent(props, inputRef, ["change"]);
  useEffect(function () {
    return function () {
      unListen();
    };
  }, []);
  return /*#__PURE__*/React.createElement("c-input", {
    ref: inputRef
  });
}

export { Input };
