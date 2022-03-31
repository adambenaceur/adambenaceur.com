import React from 'react'
import './Header.scss'
import {LinkedIn, Mail, GitHub} from '@material-ui/icons';
 
function Header() {
    return (
      <div className='header'>
          <div className='header-content'>
            <h1>Adam Benaceur</h1>
            <div className='contact'>                 
              <div className='contact-items'>
                <a href='https://github.com/adambenaceur' title='Github'> <GitHub className='icon'/> </a>
              </div>
              <div className='contact-items'>
                <a href='https://www.linkedin.com/in/adambenaceur/' title='Linkedin'><LinkedIn className='icon'/> </a>
              </div>
              <div className='contact-items'>
                <a href='mailto:benaceur.adam@gmail.com' title='Email'><Mail className='icon'/></a>
              </div>
            </div> 
          </div>
      </div>
    )
  }
 
export default Header