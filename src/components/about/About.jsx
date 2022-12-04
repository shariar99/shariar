import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'

const About = () => {
  return (
    <section id = 'about'>
      <h5> Get To Know</h5>
      <h2> About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image'/>
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Expreance</h5>
              <small>1.5+ Years working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ Worlwide </small>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Compileted Projject </small>

            </article>
          </div>
          <p>
          Analytical and detail oriented Android app developer professional with stellar
          communication skills. Adept at bringing all team members together to reach a common
          goal on time and under budget. Conceptualizing app solutions with the latest technology,
           design theory, and a large dose of creativity.
          </p>
          <a href='#contact'className='btn btn-primary'>Let's Talk</a>

        </div>


      </div>

    </section>
  )
}

export default About
