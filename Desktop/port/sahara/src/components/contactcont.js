import React from 'react';
import './contactcont.css';


const Cotactcont = () => {
  return (
    <div className='con'>
      <div className='h1'><h1>Contact Me</h1></div>
      <form  className='form' action='https://formspree.io/f/xleqdkkn' method='POST'>
        <div className='mid'>
          <h3>Send a message</h3>
        <input type='text' name='Username' placeholder='Username' required autoComplete='off'></input>
        <input type='email' name='Email' placeholder='Email' required autoComplete='off'></input>
        <textarea name='message' placeholder='Message' required></textarea>
        <input className='submit' type='submit' placeholder='Send'></input>
        </div>
      </form>
      <div className='mapsection'>
        <h3>Location</h3>
      <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13933.164756876115!2d75.11504335051089!3d13.727051917705877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb70a957c94c29%3A0x34acc2ede5ef66ca!2sSalur%2C%20Karnataka%20577414!5e0!3m2!1sen!2sin!4v1705637828428!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Cotactcont;