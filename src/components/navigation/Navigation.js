import React from 'react'
import './Navigation.scss'

function Navigation() {
  return (
    <div className='nav'> 
        <a className='nav-items' href='#about'>About</a>
        <a className='nav-divider'>|</a>
        <a className='nav-items' href='#portfolio'>Portfolio</a>
        <a className='nav-divider'>|</a>
        <a className='nav-items' href='#skills'>Skills</a>
        <a className='nav-divider'>|</a>
        <a className='nav-items'  href='#tools'>Tools</a>
        <a className='nav-divider'>|</a>
        <a className='nav-items'  href='#contact'>contact</a>
    </div>
  )
}

export default Navigation