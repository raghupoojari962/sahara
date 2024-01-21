import React from 'react';
import './project.css';
import BG from "./BG.jpg";
import { NavLink } from 'react-router-dom';
import Logo from "./logo2.jpg";
import Ecom from "./ecom.png";
const Project = () => {
  return (
    <div className='projects'>
        <div className='head'>
<h1>My Projects</h1>
</div>
<div className='sec1'>

<div className='container'>
  <div className='card'>
    <div className='top'>
<img src={Logo}></img>
    <h5>FarmEazy</h5>
  </div>
    <div className='details'>
    <p>A farmer friendly webapp, bulit using php,mysql.It has online marketplace where farmers can sell their product directly online
    </p>
   
    </div>
  </div>
  <div className='card'>
    <div className='top'>
<img src={Ecom}></img>
    <h3>Fullstack Ecommerce site</h3>
  </div>
    <div className='details'>
    <p>Fullstack ecommerce webapp using MERN stack. With add to cart and online payment options
    </p>
    
    </div>
  </div>
 
 
  
</div>
</div>
    </div>
  )
}

export default Project;