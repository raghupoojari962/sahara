import React from 'react';
import './skills.css';
const Skills = () => {
  return (
    <div  className='skills'>
        <div className='heading'>
<h1>My Skills</h1>
</div>
<div className='sec'>
    <li><h2>HTML</h2><span className='bar'><span className='html'></span></span></li>
    <li><h2>CSS</h2><span className='bar'><span className='css'></span></span></li>
    <li><h2>JavaScript</h2><span className='bar'><span className='js'></span></span></li>
    <li><h2>NodeJs</h2><span className='bar'><span className='node'></span></span></li>
    <li><h2>React</h2><span className='bar'><span className='react'></span></span></li>
    <li><h2>Flutter</h2><span className='bar'><span className='flutter'></span></span></li>
</div>
    </div>
  )
}

export default Skills;