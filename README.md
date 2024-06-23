# 跨框架组件

## 介绍

跨框架组件是指该组件不受框架限制，可以在任意的前端框架中使用，比如 React、Angular、Vue 等。


## 组件愿景
最终目的是任何框架都可以随时接入相同的组件库，比如 React 和 Vue，可以使用相同的一份源代码，我们以 Input 组件为例：
假设我们在框架内使用原生的 web-component
- 在 Vue 里面

```html
<template>
  <c-input v-model="value"></c-input>
</template>
```

- 在 React 里面

```jsx
import React from "react";
function App() {
  return <c-input />
}
```

想做到上面的使用方式只需要在项目安装 `crossui-web-components` 即可，然后在任意框架中使用 `<c-input>` 。

至于如何在 Vue 和 React 中使用 web-component，我们可以看如下文档:

- [Vue3 Web Components](https://cn.vuejs.org/guide/extras/web-components.html#vue-and-web-components)
- [React Web Components](https://legacy.reactjs.org/docs/web-components.html)

其中 React 使用的方式没有做事件绑定，需要使用 `addEventListener` 进行绑定，比较复杂，所以我们会基于 web-component 封装 React 组件，使得 React 项目可以直接使用，Vue3 同理 也需要做一层适配层更方便使用。

## 项目调试


```bash
# 调试 React
pnpm dev:react
# 调试 vue3
pnpm dev:vue3
```

  

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
├── dev-apps
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
  const [inputValue, setInputValue] = useState("");

   const handleChange = (e) => {
    setInputValue(e.detail);
  };
  return (
    <div className="App">
     <label>web component 输入</label>
        <Input change={handleChange}></Input>
        <div>
          <label>显示：</label>
          {inputValue}
        </div>
    </div>
  );
}
```

### Vue3 项目使用跨框架组件

```vue

<script setup lang="ts">
import Input from "components-vue3/input/index.vue";

function change(e) {
  console.log("input", e.detail);
}
</script>

<template>
  <!-- <c-button @click="cbtn" type="danger">
    <div>我是Vue3</div>
  </c-button> -->
  <Input @change="change" value="123" />
</template>

```

## TODO
需要继续完善的地方：
- 完善 angular 版本
- 使用 scss or less
- 组件库文档选型
- 完善组件库的测试用例
- 代码规范检查


## 题外话

参与这个组件库的开发，能学习到什么：
- pnpm 多包管理， pnpm 包发布流程
- 组件开发流程，构建工具，调试组建，文档规范
- 如何设计一个组件库和内部组件
- 学习 `web components` 技术，这是未来的趋势
- 跨框架组件库，市面上还比较少，获取一些 star 有助于面试


组件的设计原则前期可以参考成熟的组件库，比如 `ant design`、`element-ui`、`vant` 等，学习他们的设计理念，可以帮助我们更好的设计组件。


## 参考资料

1. [Web Components](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)
2. [阮一峰教程](https://www.ruanyifeng.com/blog/2019/08/web_components.html)
3. [Vue3 Web Components](https://cn.vuejs.org/guide/extras/web-components.html#vue-and-web-components)
4. [React Web Components](https://legacy.reactjs.org/docs/web-components.html)