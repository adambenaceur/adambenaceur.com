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
                <GitHub className='icon'/>
              </div>
              <div className='contact-items'>
                <LinkedIn className='icon'/>
              </div>
              <div className='contact-items'>
                <Mail className='icon'/>
              </div>
            </div> 
          </div>
      </div>
    )
  }
 
export default Header