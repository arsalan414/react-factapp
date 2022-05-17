import React,{ useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import './App.css'

function App() {

  const [darkMode, setDarkMode] = useState(true)

  function toggleDarkMode(){
    setDarkMode(prevMode => !prevMode)
  }
  return (
    <div className={darkMode ? "lightMode": "darkMode"}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <hr />
      <Main darkMode={darkMode}/>
    </div>
  )
}

export default App