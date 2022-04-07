import React from 'react'
import './Tools.scss'

function Tools() {


  return (
    <div className='tools' id='tools'>
      <div className='skills-title'>
        <h1>Tools</h1>
      </div>
      {/* <div className='skills-icon-container'> */}
      <div className='skills-icon-container'>
        <div className='skills-icon'>
          <div className='icons'><img alt="Visual Studio Code"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" /></div>
          <div className='icons'><img  alt="HTML5"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" /></div>
          <div className='icons'><img  alt="CSS3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" /></div>
          <div className='icons'><img alt="JavaScript"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"/></div>
          <div className='icons'><img alt="React"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></div>
          <div className='icons'><img alt="Node.js" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"  /></div>
          <div className='icons'><img alt='Python' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'/></div>
      </div>
    </div>
  </div>
  )
}

export default Tools