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
          <p> I am nursing student at the <a>University of Calgary</a>.</p>
          <p> I like learning about computer science topics such as logic, and programming paradigms. My
            interests include nursing and full stack developement. </p>
          <p> Thanks for checking out my page, <a>have a great rest of your day! </a></p>
        </div>
    </div>
  )
}

export default About