import { useState, useRef } from "react"

export default function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  // {current : 0} => Ref 는 하나의 객체(object)이다. ref 안의 값을 보고싶다면 ref.current 를 사용할것!
  console.log(countRef);

  const increaseCountState = () => {
    setCount(count + 1);
  }

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
  }

  return (
    <div>
      <p>State : {count}</p>
      <p>Ref : {countRef.current}</p>
      <button onClick={increaseCountState}>State 올리기</button>
      {/* 위에 State 올리기 버튼을 누르면 state 가 변경되므로 누를때마다 랜더링이되지만, Ref 같은 경우는 재 랜더링이 되지 않는다.
      하지만 ref 버튼도 누를때마다 값은 변경되고있다.
      이후에 state 버튼을 눌러 재 랜더링을 하게되면, ref 의 값이 변해있다. */}
      <button onClick={increaseCountRef}>Ref 올리기</button>
    </div>
  )
}
