import React from 'react'
import './expreance.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Expreance = () => {
  return (
    <section id = 'expreance'>
      <h5>Whats Skills I Have</h5>
      <h2>My Expreance</h2>

      <div className="container expreance__container">
        <div className="expreance__frontend">
          <h3>Frontend Development</h3>
          <div className="expreance__content">
            <article className='expreance__details'>
              <BsPatchCheckFill className='expreance__details-icons'/>
             <div>
             <h4>Android SDK</h4>
              <small className='text-light'>Exprienced</small>
             </div>
            </article>
            <article className='expreance__details'>
              <BsPatchCheckFill className='expreance__details-icons'/>
              <div>
              <h4>JAVA</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='expreance__details'>
              <BsPatchCheckFill className='expreance__details-icons'/>
             <div>
             <h4>XML</h4>
              <small className='text-light'>Exprienced</small>
             </div>
            </article>
            <article className='expreance__details'>
              <BsPatchCheckFill className='expreance__details-icons'/>
              <div>
              <h4>Kotlin</h4>
              <small className='text-light'>Exprienced</small>
              </div>
            </article>
            <article className='expreance__details'>
              <BsPatchCheckFill className='expreance__details-icons'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Exprienced</small>
              </div>
            </article>
            <article className='expreance__details'>
              <BsPatchCheckFill className='expreance__details-icons'/>
             <div>
             <h4>Jetpack Compose</h4>
              <small className='text-light'>Exprienced</small>
             </div>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND */}


        <div className="expreance__backend">
        <h3>Backend Development</h3>
          <div className="expreance__content">
            <article className='expreance__details'>
              <BsPatchCheckFill className='expreance__details-icons'/>
              <div>
              <h4>SQLite</h4>
              <small className='text-light'>Exprienced</small>
              </div>
            </article>
            <article className='expreance__details'>
              <BsPatchCheckFill className='expreance__details-icons'/>
             <div>
             <h4>RoomDb</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>
            <article className='expreance__details'>
              <BsPatchCheckFill className='expreance__details-icons'/>
             <div>
             <h4>RestFul APIs</h4>
              <small className='text-light'>Exprienced</small>
             </div>
            </article>
            <article className='expreance__details'>
              <BsPatchCheckFill className='expreance__details-icons'/>
            <div>
            <h4>Firebase</h4>
              <small className='text-light'>Exprienced</small>
            </div>
            </article>
            <article className='expreance__details'>
              <BsPatchCheckFill className='expreance__details-icons'/>
              <div>
                <h4>AWS</h4>
               <small className='text-light'>Exprienced</small>
               </div>
            </article>
      
            <article className='expreance__details'>
              <BsPatchCheckFill className='expreance__details-icons'/>
              <div>
                <h4>MongoDB</h4>
               <small className='text-light'>Exprienced</small>
               </div>
            </article>
          </div>


        </div>
      </div>

    
    </section>
  )
}

export default Expreance