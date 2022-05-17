import React,{ useState } from 'react'
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';

function Navbar(props) {
    // const [toggle, setToggle] = useState(true)
    // function handleToggle(){
    //     setToggle(prev => !prev)
    //     console.log(toggle)
    // }

  return (
    <nav className='Navbar'>
        <div>
            <img src='logo192.png' width='50px'></img>
            <h2>ReactFacts</h2>            
        </div>
        <div className='toggle' onClick={props.toggleDarkMode}>
            <p className={props.darkMode && "lightOff"}>Light</p>
            {props.darkMode? <BsToggleOff  className='btn'/>: <BsToggleOn className='btn'/>}
            <p className={!props.darkMode && "lightOff"}>Dark</p>
        </div>
    </nav>
  )
}

export default Navbar