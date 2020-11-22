import { useRef } from "react"
import React from 'react'

function TextInputWithFocusButton() {
  const inputEl = useRef<HTMLInputElement>(null!);
  const onButtonClick = () => {
		// `current` 指向已挂载到 DOM 上的文本输入元素
		console.log('focus')
		inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

export default TextInputWithFocusButton