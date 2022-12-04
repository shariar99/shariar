import React from 'react'
import './services.css'
import{BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id= 'services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='services'>
          <div className="services__head">
            <h3>Android Application Develompent</h3>
          </div>
          <ul className='services__list'>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Build advanced applications for the Android platform</p>
            </li>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Proficiency in Java, Kotlin, XML, JSON</p>
            </li>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Familiarity with MVP, MVVM architecture, Dagger2</p>
            </li>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>have a strong knowledge of different Android versions </p>
            </li>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Work with outside data sources and APIs</p>
            </li>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Experience with Android SDK.</p>
            </li>
          </ul>
        </article>

        {/* END HERE UI/UX */}
        <article className='services'>
          <div className="services__head">
            <h3>Android Application Design</h3>
          </div>
          <ul className='services__list'>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>

        {/* WEB DEVELOPMENT */}
        <article className='services'>
          <div className="services__head">
            <h3>Android Application Maintainance</h3>
          </div>
          <ul className='services__list'>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>

        {/* Content Creation */}

      </div>
      

    </section>
  )
}

export default Services