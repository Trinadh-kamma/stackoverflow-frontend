import React, {useEffect, useRef} from 'react'
import { NavLink } from 'react-router-dom'
import "./SideNavbar.css"
import world from "../../assets/world.png"

const SideNavbar = () => {
  const navLinkRef = useRef(null);

  useEffect(() => {
    navLinkRef.current.focus();
  })
  return (
    <nav className="mobile__sidebar">
      <NavLink to="/" ref={navLinkRef} >Home</NavLink>
      <p>PUBLIC</p>
      <NavLink to="/questions">
        <img src={world} alt = "globe"  className="world"/>
          Questions
      </NavLink>
      <NavLink to="/tags">Tags</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/companies">Companies</NavLink>
    </nav>
  )
}

export default SideNavbar

