import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import{AiFillFacebook} from 'react-icons/ai'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/shariar99/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/shariar99" target="_blank"><FaGithub/></a>
        <a href="https://www.facebook.com/shariarhossain99" target="_blank"><AiFillFacebook/></a>
      
    </div>
  )
} 

export default HeaderSocial 
 