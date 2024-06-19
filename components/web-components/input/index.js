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
      const shadow = this.attachShadow({ mode: "open" });
      const content = template.content.cloneNode(true);
      this._input = content.querySelector("#c-input");
      shadow.appendChild(content);
      this._input.addEventListener("input", (e) => {
        const { value } = e.target;
        this.value = value;
        this.dispatchEvent(new CustomEvent("change", { detail: value }));
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
