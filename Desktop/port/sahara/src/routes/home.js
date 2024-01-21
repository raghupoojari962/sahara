import React from 'react';
import Nav from '../components/nav';
import Herosec from '../components/herosec';
import Skills from '../components/skills';
import Footer from '../components/footer';
import Project from '../components/project';
import { useRef } from 'react';

const Home = () => {
  const skill = useRef(null);
  const scorllToSection =(elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }
  return (
    <>
        <Nav/>
        <Herosec/>
        <Skills/>
        <Project/>
        <Footer/>
    </>
  )
}

export default Home;