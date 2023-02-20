import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './navbar.css'

const Navbar = () => {
    
    const [click, setClick] = useState(false);
    
    const handleClick = () => {
        setClick(!click)
    }

  return (
    <>
    <div className='navbar'>
        <nav>
            <div className='brand'>
                <img src="https://images.pexels.com/photos/5912149/pexels-photo-5912149.jpeg?auto=compress&cs=tinysrgb&w=400" alt="brand" />
            </div>
            <div id='nav-items' className={click ? "#nav-item nav-item-active" : "#nav-item"}>
                <ul>
                    <li><a href="#profile">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#exp">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className='nav-mobile' onClick={handleClick}>
                <i>{
                    click ? <FontAwesomeIcon icon={faTimes} className="nav-remove" />  : <FontAwesomeIcon icon={faBars} className="nav-head" />
                    }</i>

            </div>
        </nav>
    </div>
    <div className='margin'>
      
    </div>
    </>
  )
}

export default Navbar