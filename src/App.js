import { useEffect, useRef, useState } from "react"

export default function App() {
  const [count, setCount] = useState(1);
  const renderCount = useRef(0);

  // Ref 는 re-rendering 을 시키지 않으므로 무한루프에 빠지지 않게된다.
  // 즉, useRef 는 변화는 감지해야되지만, 변화가 랜더링을 발생시키면 안되는 어떤 값을 다룰때 유용하다.
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log('랜더링 수: ', renderCount.current)
  })

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}
