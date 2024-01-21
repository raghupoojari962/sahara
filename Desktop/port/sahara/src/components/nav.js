import { Link } from 'react-router-dom';
import './nav.css';
import React, { useState } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";


const Nav = () => {
    const [click,setClick]=useState(false);
const handleclick = ()=>setClick(!click);
  return (
    <div className='header'>

    <Link to="/"><h2>SAHARA</h2></Link>


    <ul className={click ? "menu active": "menu"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/service">Service</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </ul>
    <div className='hamburger' onClick={handleclick}>
        {click ? ( <FaTimes size={20} style={{color: "white"}}/>):( <FaBars size={20} style={{color: "white"}}/>)
        }
       
       
    </div>
   
</div>
    
  )
}

export default Nav;