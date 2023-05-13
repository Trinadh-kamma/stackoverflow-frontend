import React, { useEffect, useRef} from 'react'
import "./Sidebar.css"
import { NavLink } from 'react-router-dom'
import world from "../../assets/world.png"

const Sidebar = () => {
  
  const navLinkRef = useRef(null);

  useEffect(() => {
    navLinkRef.current.focus()
  }, [])

  return (
    <div className="side-bar">
      <NavLink to="/" ref={navLinkRef} >Home</NavLink>
        <p>PUBLIC</p>
      <NavLink to="/questions">
        <img src={world} alt = "globe" className="world"/>
        Questions
      </NavLink>
      <NavLink to="/tags">Tags</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/companies">Companies</NavLink>
    </div>
  )
}

export default Sidebar
