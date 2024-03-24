import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/avion.png'
import { AiOutlineClose } from "react-icons/ai";
import {FaBars} from "react-icons/fa6"



export const Navbar = () => {

  const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800 ? true : false);
  const closeNavHandler = () => {
    if(window.innerWidth < 800) {
      setIsNavShowing(false);
    } else {
      setIsNavShowing(true)
    }
  }
  return (

    <nav>
      
      <div className="container nav_container" >
        
        <Link to='/'className='nav_logo' onClick={closeNavHandler} >
          <img src={logo} alt="Nav Logo" />
        </Link>
        

       
      { isNavShowing && <ul className='nav_menu'>
          <li><Link to="/profile/:id" onClick={closeNavHandler} >Sofia Perez</Link></li>
          <li><Link to="/create" onClick={closeNavHandler} >Create Post</Link></li>
          <li><Link to="/authors" onClick={closeNavHandler} >Authors</Link></li>
          <li><Link to="/logout" onClick={closeNavHandler} >Logout</Link></li>
        </ul>}

        
        <button className="nav_toggle-btn" onClick={()=> setIsNavShowing(!isNavShowing)}>
         { isNavShowing ?  <AiOutlineClose /> : <FaBars/>}

        </button>
        
      </div>
    </nav>
  )
}
