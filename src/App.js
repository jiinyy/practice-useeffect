// useEffect & Clean up - Timer
import React, { useState } from 'react';
import Timer from './component/Timer.js'

export default function App() {
  const [showTimer, setShowTimer] = useState(false)

  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  )
}
