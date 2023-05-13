import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";

import {RiMenuLine} from "react-icons/ri"
import {RiCloseLine} from "react-icons/ri"
import icon from "../../assets/icon.png"
import image from "../../assets/logo.png"
import search from "../../assets/search-solid.svg"
import Avatar from '../Avatar/Avatar'



const Navbar = ({user, isMenu, handleMenu}) => {
  
  const [isToggle, setIsToggle] = useState(false);
  const handleSearch = () => {
    setIsToggle(!isToggle);
  }



  return (
    <nav>
      <div className="navbar">
        {
        isMenu ? 
        (<RiCloseLine className="menu" onClick={handleMenu}/>) 
          : 
        (<RiMenuLine className='menu'
        onClick={handleMenu}
        />) 
        }


        <Link to = "/" className="nav-item">
          <img src={icon} alt="icon" className="nav-icon"/>
          <img src={image} alt="logo-stack" className="nav-logo"/>
        </Link>

        <Link className="nav-item nav-btn products">Products</Link>


        <form >
          <input type="text" alt="search" placeholder="Search..."/>
          <img src={search} alt="serach-icon" className="search-icon"/>
        </form>


        {isToggle ? (
          <>
            <form className="search-bar2" style={{alignSelf : "center"}}>
              <input
              type="text" alt="search" placeholder="Search..."/>
              <img src={search} alt="serach-icon" className="search-icon"/>
            </form>
          </>
        ) : null}


        <button id="button1"
        onClick={handleSearch}
        className="search-icon1">
          <img src={search} alt="search-icon" className="search-icon search"/>
        </button>

        {user === null ? (
          <Link to="/Auth" className="nav-item nav-link"> 
            Log in
          </Link>
        ) : (
          <>
            <Avatar>
              <Link to="/user" style={{color:"#fff", textDecoration : "none"}}>
                T
              </Link>
            </Avatar>
            <button className="log-out">Log Out</button>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar

