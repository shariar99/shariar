import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
  return (
   <footer>

  <a href='#' className="footer__logo">Shariar99</a>

<ul>
  <li><a href='#'>Home</a> </li>
  <li><a href='#about'>About</a> </li>
  <li><a href='#expreance'>Expreance</a> </li>
  <li><a href='#services'>Services</a> </li>
  <li><a href='#portfolio'>Portfolio</a> </li>
  <li><a href='#testimonials'>Testmonials</a> </li>
  <li><a href='#contact'>Contact</a></li>
</ul>
<div className='footer__socials'>
  <a href = "https://facebook.com" ><AiFillFacebook/></a>
  <a href='https://insttagram.com' ><FiInstagram/></a>
  <a href='https://facebook.com'> <FiTwitter/></a>
</div>
<div className='footer__copyright'>
  <small>&copy, Shariar99 . All right reserved</small>

</div>
   </footer>
  )
}

export default Footer
