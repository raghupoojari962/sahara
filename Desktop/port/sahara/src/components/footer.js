import React from 'react';
import './footer.css';
import {FaHome,FaPhone,FaMailBulk, FaFacebook, FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='m'><h1>SaharaDevelopers</h1></div>
      <div className='bottom'>
      <div className='home'>
     <h4> <FaHome size={20} style={{color:"white",marginRight:"2rem"}}/>Kondlur, Thirthahalli, Shimoga D</h4>
      </div>
      <div className='phone'>
       <h4> <FaPhone size={20} style={{color:"white",marginRight:"2rem"}}/>8088614879</h4>
      </div>
      <div className='mail'>
       <h4> <FaMailBulk  size={20} style={{color:"white",marginRight:"2rem"}}/>sahara090602@gmail.com</h4>
        </div>
        <div className='facebook'>
       <h4> <FaFacebook  size={20} style={{color:"white",marginRight:"2rem"}}/>SaharaDevelopers</h4>
        </div>
        <div className='insta'>
        <h4><FaInstagram  size={20} style={{color:"white",marginRight:"2rem"}}/>saharadevelopers</h4>
        </div>
        </div> 
        <div className='copyright'><h4>copyright@saharadevelopers</h4><p>All rights reserved</p></div>
        </div>
   
  )
}

export default Footer;