import React from 'react'
import './Tools.scss'

function Tools() {


  return (
    <div className='tools' id='tools'>
      <div className='tools-title'>
        <h1>Tools</h1>
      </div>
      <div className='tools-icon-container'>
        <div className='tools-icon'>
          <div className='tools-icon-img'><img alt="Visual Studio Code"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" /><h1> VSC</h1></div>
          <div className='tools-icon-img'><img  alt="NPM"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" /><h1>NPM</h1></div>
          <div className='tools-icon-img'><img  alt="Github" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /><h1>Github</h1></div>
          <div className='tools-icon-img'><img alt="Slack"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg"/><h1>Slack</h1></div>
          <div className='tools-icon-img'><img alt="Yarn"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg" /><h1>Yarn</h1></div>
          <div className='tools-icon-img'><img alt="Firebase" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"  /><h1>Firebase</h1></div>
          <div className='tools-icon-img'><img alt='Git' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"/><h1>Git</h1></div>
          <div className='tools-icon-img'><img alt='Bash' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"/><h1>Bash</h1></div>
          
      </div>
    </div>
  </div>
  )
}

export default Tools