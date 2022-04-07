import React from 'react'
import './Skills.scss'


function Skills() {
  return (
    <div className='skills'id='skills'>
      <div className='skills-title'>
        <h1>Skills</h1>
      </div>
      {/* <div className='skills-icon-container'> */}
      <div className='skills-icon-container'>
        <div className='skills-icon'>
          <div className='skills-icon-img'><img  alt="HTML5"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" /><h1>HTML5</h1></div>
          <div className='skills-icon-img'><img  alt="CSS3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" /><h1>CSS3</h1></div>
          <div className='skills-icon-img'><img alt="JavaScript"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"/><h1>JavaScript</h1></div>
          <div className='skills-icon-img'><img alt="React"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /><h1>React</h1></div>
          <div className='skills-icon-img'><img alt="Node.js" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"  /><h1>Node.js</h1></div>
          <div className='skills-icon-img'><img alt='Python' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'/><h1>Python</h1></div>
          <div className='skills-icon-img'><img alt='TailwindCSS' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"/><h1>TailwindCSS</h1></div>
          <div className='skills-icon-img'><img alt='Sass' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"/><h1>Sass</h1></div>
          <div className='skills-icon-img'><img alt='Redux' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"/><h1>Redux</h1></div>
          
      </div> 
    </div>
  </div>
  )
}

export default Skills