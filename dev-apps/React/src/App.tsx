import { useState } from "react";
import "./App.css";
// import "web-comp/button/index.js";
// import "web-comp/input/index.js";
// TODO 如何去掉 index 'crossui-react/index' --> 'crossui-react'
import { Input } from "crossui-react/index";

function App() {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.detail);
  };

  return (
    <>
      <div>
        <h1>Input 组件</h1>
        <label>web component 输入</label>
        <Input change={handleChange}></Input>
        <div>
          <label>显示：</label>
          {inputValue}
        </div>
      </div>
    </>
  );
}

export default App;
