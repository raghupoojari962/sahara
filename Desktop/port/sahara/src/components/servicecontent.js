import React from 'react';
import './servicecontent.css';
import { NavLink } from 'react-router-dom';
import BG from './BG.jpg';
import Web from './web.png';
import Mobile from './mobile.png';
import Edit from './editing.png';
import Desktop from './desktop.jpg';

const Servicecontent = () => {
  return (
    <>
     <div className='h' id='skills'><h1>What i can do</h1></div>
    <div className='service'>
    <div className='container'> 
    <div className='card'>
    <div className='top'>
<img src={Web}></img>
    <h4>Web Development</h4>
  </div>
    <div className='detail'>
    <p>I can design and develop fullstack web Applications and static webpages.
        And also wordpress sites
    </p>
    
    </div>
  </div>
  <div className='card'>
  <div className='top'>
<img src={Mobile}></img>
  <h4>Android & Ios Development</h4>
</div>
  <div className='detail'>
  <p>Project Details, Lorem fdfkjfd dfj jdf sdfhjf df hfr kdhd dfhd dhdf dkfhef dkhd gfkgre e
  </p>
  
  </div>
</div>
<div className='card'>
    <div className='top'>
<img src={Desktop}></img>
    <h4>Desktop Applications</h4>
  </div>
    <div className='detail'>
    <p>Project Details, Lorem fdfkjfd dfj jdf sdfhjf df hfr kdhd dfhd dhdf dkfhef dkhd gfkgre e
    </p>
    
    </div>
  </div>
  <div className='card'>
  <div className='top'>
<img src={Edit}></img>
  <h4>Photo & Video Editing</h4>
</div>
  <div className='detail'>
  <p>Project Details, Lorem fdfkjfd dfj jdf sdfhjf df hfr kdhd dfhd dhdf dkfhef dkhd gfkgre e
  </p>
  
  </div>
</div>
</div>
</div>
</>

  )
}

export default Servicecontent;