import { useState } from 'react';
import Page from './component/Page.jsx';
import { ThemeContext } from './context/ThemeContext.js';
import { UserContext } from './context/UserContext.js';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <UserContext.Provider value={'홍길동'}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  )
}

export default App;