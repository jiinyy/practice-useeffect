import { useRef, useState } from "react"

export default function App() {
  const [renderer, setRenderer] = useState(0);
  const countRef = useRef(0)
  let countVar = 0;

  const increaseRef = () => {
    countRef.current = countRef.current + 1
    console.log('ref: ', countRef.current + 1)
  }
  const increaseVar = () => {
    countVar = countVar + 1
    console.log('Var: ', countVar)
  }
  const doRendering = () => {
    setRenderer(renderer + 1);
  }

  const printResults = () => {
    console.log(`ref : ${countRef.current}, var : ${countVar}`)
  }

  return (
    <div>
      <p>Ref : {countRef.current}</p>
      <p>Var : {countVar}</p>
      {/* Ref, Var 버튼 똑같이 클릭 후, 랜더링 버튼을 누르면 Ref 만 변경되어있고, Var 은 그대로이다.
      이유는, 컴포넌트가 다시 랜더링될때 App함수가 다시 처음부터 시작되고, 그 안에 있는 변수들을 그때마다 계속 초기화가된다.
      하지만 Ref는, 아무리 컴포넌트가 랜더링이되도 값을 유지합니다.
      ref 의 값은 이 컴포넌트가 브라우저가 Mounting 된 시점부터 unMounting 될때까지 같은 값을 계속 유지할 수 있다는 뜻입니다. */}
      <button onClick={doRendering}>랜더링!</button>
      <button onClick={increaseRef}>Ref 올려</button>
      <button onClick={increaseVar}>Var 올려</button>
      <button onClick={printResults}>Ref Var 값 출력</button>
    </div>
  )
}
