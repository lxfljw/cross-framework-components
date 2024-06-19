(function () {
  const template = document.createElement("template");

  template.innerHTML = `
  <style>
    .c-button {
      display: inline-block;
      padding: 4px 20px;
      font-size: 14px;
      line-height: 1.5715;
      font-weight: 400;
      border: 1px solid #1890ff;
      border-radius: 2px;
      background-color: #1890ff;
      color: #fff;
      box-shadow: 0 2px #00000004;
      cursor: pointer;
    }
    .c-button-warning {
      border: 1px solid #faad14;
      background-color: #faad14;
    }
    .c-button-danger {
      border: 1px solid #ff4d4f;
      background-color: #ff4d4f;
    }
</style>
  <div class="c-button"><slot>按钮</slot></div>
`;
  class CButton extends HTMLElement {
    constructor() {
      super();

      this.btnTypeMapClass = {
        primary: "c-button",
        warning: "c-button-warning",
        danger: "c-button-danger",
      };
      // open: 开放给外部获取 dom 信息
      const shadow = this.attachShadow({ mode: "open" });
      // 深拷贝一份
      const content = template.content.cloneNode(true);
      const type = this.getAttribute("type");
      this._btn = content.querySelector(".c-button");
      console.log(this.type);
      this._btn.className += ` c-button-${this.btnTypeMapClass[type]}`;
      shadow.appendChild(content);
    }
    static get observedAttributes() {
      return ["type"];
    }

    attributeChangedCallback(name, _, newValue) {
      this[name] = newValue;
      this.render();
      console.log("111");
    }
    render() {
      this._btn.className = `c-button ${this.btnTypeMapClass[this.type]}`;
      console.log("this._btn.className", this._btn.className);
    }
  }

  window.customElements.define("c-button", CButton);
})();

(function () {
  const template = document.createElement("template");
  template.innerHTML = `
  <style>
    .cai-button {
      display: inline-block;
      padding: 4px 20px;
      border: 1px solid  var(--primary-color, #1890ff);
      background-color: var(--primary-color, #1890ff);
      font-size: 14px;
      color: #fff;
      line-height: 1.5715;
      font-weight: 400;
      box-shadow: 0 2px #00000004;
      border-radius: 2px;
    }
    .cai-button-warning {
      border: 1px solid var(--warning-color, #faad14);
      background-color: var(--warning-color, #faad14);
    }
    .cai-button-danger {
      border: 1px solid var(--error-color, #ff4d4f);
      background-color: var(--error-color, #ff4d4f);
    }
  </style>
  <div class="cai-button"> <slot ></slot> </div>
  `;
  class CaiButton extends HTMLElement {
    constructor() {
      super();
      this._type = {
        primary: "cai-button",
        warning: "cai-button-warning",
        danger: "cai-button-danger",
      };
      const shadow = this.attachShadow({
        mode: "open",
      });
      const type = this.getAttribute("type");
      const content = template.content.cloneNode(true); // 克隆一份 防止重复使用 污染
      this._btn = content.querySelector(".cai-button");
      this._btn.className += ` ${this._type[type]}`;
      shadow.appendChild(content);
    }
    static get observedAttributes() {
      return ["type"];
    }
    attributeChangedCallback(name, oldValue, newValue) {
      this[name] = newValue;
      this.render();
      console.log(222);
    }
    render() {
      this._btn.className = `cai-button ${this._type[this.type]}`;
    }
  }
  window.customElements.define("cai-button", CaiButton);
})();
