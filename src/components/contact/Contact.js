import React, { useState} from 'react'
import './Contact.scss'
import emailjs from 'emailjs-com'

function Contact() {
  const [message, setMesssage ] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    setMesssage(true)
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
          
          <form onSubmit={sendEmail} autocomplete="off">
          {message && <div className='message'>Thank you! I will be in touch shorty.</div>}
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