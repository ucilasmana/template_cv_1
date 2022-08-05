import React from 'react'
import CTA from './CTA'
import './header.css'
import profpics from '../../assets/profpic2.png'
import HeaderLink from './headerLink'

const header = () => {
  return (
    <header id="home">
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Uci Lasmana</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA/>
       <HeaderLink/>
        <div className='me'>
          <img src={profpics} alt='me'/>
         
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header