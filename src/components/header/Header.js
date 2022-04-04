import React from 'react'
import './Header.scss'
import {LinkedIn, Mail, GitHub} from '@material-ui/icons';
 
function Header() {
    return (
      <div className='header'>
          <div className='header-content'>
            <h1 className='header-name'> 
              <a>A</a>
              <a>d</a>
              <a>a</a>
              <a>m</a>
              <p>&nbsp;</p>
              <a>B</a>
              
              <a>e</a>
              <a>n</a>
              <a>a</a>
              <a>c</a>
              <a>e</a>
              <a>u</a>
              <a>r</a>
            </h1>
            <div className='media'>                 
              <div className='media-items'>
                <a href='https://github.com/adambenaceur' title='Github'> <GitHub className='icon'/> </a>
              </div>
              <div className='media-items'>
                <a href='https://www.linkedin.com/in/adambenaceur/' title='Linkedin'><LinkedIn className='icon'/> </a>
              </div>
              <div className='media-items'>
                <a href='mailto:benaceur.adam@gmail.com' title='Email'><Mail className='icon'/></a>
              </div>
            </div> 
          </div>
      </div>
    )
  }
 
export default Header