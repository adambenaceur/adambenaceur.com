import React from 'react'
import './Contact.scss'
import emailjs from 'emailjs-com'

function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_1s6fscm', 'template_yr8ugqa', e.target, 'AcmjQAKUiLtUninFe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  return (
    <div className='contact' id='contact'>
      <div className='contact-title'> <h1>Contact</h1> </div>
      <div className='contact-section'>
        <div className='contact-img'>
          <img src='assets/shake.svg' alt=''/>
        </div>
        <div className='contact-form'>
          
          <form onSubmit={sendEmail}>
            <input type='text' placeholder='Email' name='email'/>
            <textarea placeholder='Message' name = 'message'></textarea>
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
      
      </div>
  )
}

export default Contact