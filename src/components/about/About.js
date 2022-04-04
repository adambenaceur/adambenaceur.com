import React, { useEffect, useRef } from 'react'
import './About.scss'
import { init } from 'ityped'

function About() {
  return (
    <div className='about' id='about'>
        <div className='imgContainer'>
          <img src='assets/profile.jpg' alt='profile-photo'/>
        </div>
        
        <div className='title'>
          <h1 >Hi, I'm Adam !</h1>
        </div>
        <p> I am nursing student at the <a>University of Calgary</a>.</p>

        <p> I like learning about computer science topics such as logic, and programming paradigms,
           with an interest in web 3.0 and full stack developement. </p>
        
        <p> Thanks for checking out my page, <a>have a great rest of your day! </a></p>

    </div>
  )
}

export default About