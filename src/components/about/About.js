import React, { useEffect, useRef } from 'react'
import './About.scss'
import { init } from 'ityped'

function About() {
  return (
    <div className='about' id='about'>
        <div className='imgContainer'>
          <img src='assets/profile.jpg' alt='profile-photo'/>
        </div>
        
        <div className='about-me'>
            <h1 >Hi, I'm Adam !</h1>
          <p>As a nursing student at the <a>University of Calgary</a>,</p>
          <p>I am intrigued by the fascinating blend of healthcare and technology, where these two fields seamlessly merge.</p>
          <p>Driven by a strong passion for learning, I am eager to explore the promising world were these two fields meet unlocking new potential and opportunities.</p>
          <p> Thanks for checking out my page, <a>have a great rest of your day! </a></p>
        </div>
    </div>
  )
}

export default About
