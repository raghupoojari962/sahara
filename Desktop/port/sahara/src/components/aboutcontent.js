import React from 'react';
import './aboutcontent.css';
import hero from './hero.png';
import { NavLink } from 'react-router-dom';

const Aboutcontent = () => {
  return (
    <div className='about'>
      <div className='det'>
        <h1>Who Am I?</h1>
        <p>Im a  BCA Graduate, Fullstack Developer.</p>
        <p>I can build softwares for your business</p>
        <p>To grove your business, Online presence is most important in these days ,i will help you to take your business online.</p>
        <div className='but'><NavLink to="/contact"><h5>Hire Me</h5></NavLink></div>
        </div>
        <div className='ban'>
          <img src={hero}></img>
        </div>
    </div>
  )
}

export default Aboutcontent;