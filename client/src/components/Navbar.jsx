import { useState } from "react"
import "../styles/Navbar.css"
import {Link}  from 'react-router-dom'

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const handleShowOff = ()=>{

    setIsNavExpanded(prev => !prev);
  }
  return (
    <nav className="navigation">
      <div className="nav-left">
      <Link to="/" className="brand-name">
        Notes
      </Link>
      <div className="hmg">
      <input
        id="checkbox" type="checkbox"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
      </input>
      <label className="toggle" htmlFor="checkbox">
        <div id="bar1" className="bars"></div>
        <div id="bar2" className="bars"></div>
        <div id="bar3" className="bars"></div>
    </label>
      </div>
      </div>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul  onClick={handleShowOff} >
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        
        </ul>
      </div>
    </nav>
  );
}