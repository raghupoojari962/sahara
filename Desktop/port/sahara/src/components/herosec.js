import React from 'react';
import './herosec.css';
import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
const Herosec = () => {

  return (
    <div className='herosec'>
        <div className='text'>
            <h3>Hello!</h3>
            <h2>I am Raghu, </h2>
            <h2>Software developer,</h2>
            <p>I can build Softwares for your business</p>
            <div className='buttons'>
<div className='btn'><NavLink  to='/about'><h5>Know more</h5></NavLink></div>
<div className='btn'><NavLink to='/contact'><h5>Contact me</h5></NavLink></div>
</div>

        </div>
        <div className='img'>
        
        </div>
    </div>
  )
}

export default Herosec;