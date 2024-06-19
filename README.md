# 跨框架组件

## 介绍

跨框架组件是指该组件不受框架限制，可以在任意的前端框架中使用，比如 React、Angular、Vue 等。



## 实现原理

跨框架组件的实现原理主要是基于 Web Components 技术。Web Components 是一套基于 W3C 标准的技术，它允许开发者创建可重用、可互操作的自定义 HTML 元素，并在网页中使用它们。

Web Components 的核心是自定义元素，它是一种基于类的 JavaScript 类，可以用来创建新的 HTML 标签。自定义元素可以包含自己的 HTML、CSS、JavaScript，并可以与其他自定义元素进行交互。

跨框架组件的实现原理就是将 Web Components 封装成各个框架的组件，使得组件可以被任意的前端框架使用。



## 跨框架组件的优势

- 跨框架：跨框架组件可以被任意的前端框架使用，无论是 React、Angular、Vue 还是其它框架，都可以很方便地使用跨框架组件。
- 复用性：跨框架组件可以被复用，可以被多个项目使用，降低开发成本。
- 定制化：跨框架组件可以根据业务需求进行定制化开发，满足不同项目的需求。

## 项目结构

```text
├── README.md
├── package.json
├── apps
    ├── React （ React 测试组件项目）
    ├── Vue （ Vue 测试组件项目）
├── components
    ├── react （ 基于web-comp子包适配 React）
    ├── vue （ 基于web-comp子包适配 Vue）
    ├── web-comp (web components 编写的原生组件)
```

## 使用示例


### React 项目使用跨框架组件

```jsx
import React from'react';
import Input from "components-react/input";



export default function App() {
  const handleChange = (e) => {
    console.log(e.detail);
  };
  return (
    <div className="App">
      <Input change={handleChange}></Input>
    </div>
  );
}
```

### Vue3 项目使用跨框架组件

TODO:待补充


