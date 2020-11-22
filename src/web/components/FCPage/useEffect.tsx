import { useEffect } from "react";

//useEffect接收一个包含命令式、且可能有副作用代码的函数。
//使用 useEffect 完成副作用操作。赋值给 useEffect 的函数会在组件渲染到屏幕之后执行。
//使用useEffect时，请注意不要返回任何函数或undefined，特别是当使用箭头功能时，要注意他的返回
function DelayedEffect(props: { timerMs: number }) :void{
  const { timerMs } = props;
  // bad! setTimeout implicitly returns a number because the arrow function body isn't wrapped in curly braces
  useEffect(
    function(){
      setTimeout(() => {
        console.log('pppppp')
			}, timerMs),[timerMs]
		},
  );
  return null;
}

export default DelayedEffect
