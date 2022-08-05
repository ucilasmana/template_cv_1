import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {MdOutlineBusinessCenter} from'react-icons/md'
import {MdOutlineRateReview} from 'react-icons/md'
//import {useState} from 'react'
import {Link} from 'react-scroll'

const Nav = () => {
  //const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
       <li><Link activeClass="active" to="home" spy={true} smooth={true}><AiOutlineHome/></Link></li>
          <li><Link  to="about" spy={true}  offset={-100} duration={500} smooth={true}><AiOutlineUser/></Link></li>
          <li><Link  to="experience" offset={-150} spy={true} smooth={true}><BiBook/></Link></li>
          <li><Link  to="services" offset={-150} spy={true} smooth={true}><RiServiceLine/></Link></li>
          <li><Link  to="portfolio" offset={-200} spy={true} smooth={true}><MdOutlineBusinessCenter/></Link></li>
          <li><Link  to="testimonial" offset={-250} spy={true} smooth={true}><MdOutlineRateReview/></Link></li>
          <li><Link  to="contact" offset={-100} spy={true} smooth={true}><BiMessageSquareDetail/></Link></li>
          
      {/*<a href='#' onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
  <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>*/}
    </nav>
  )
}

export default Nav