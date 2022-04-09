import React from 'react'
import './Contact.scss'

function Contact() {
  return (
    <div className='contact' id='contact'>
      <div className='contact-title'> <h1>Contact</h1> </div>
      <div className='contact-section'>
        <div className='contact-img'>
          <img src='assets/shake.svg' alt=''/>
        </div>
        <div className='contact-form'>
          
          <form>
            <input type='text' placeholder='Email'/>
            <textarea placeholder='Message'></textarea>
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
      
      </div>
  )
}

export default Contact