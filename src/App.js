import { useEffect, useState } from "react"

export default function App() {
  const [count, setCount] = useState(1);
  const [renderCount, setRenderCount] = useState(1);

  // 무한루프에 갇힘.. => setCount => Rendering 하는데 그 안에서 또 setRenderCount => 랜더링 또랜더링.....
  useEffect(() => {
    console.log(setRenderCount(renderCount + 1))
  })

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}
