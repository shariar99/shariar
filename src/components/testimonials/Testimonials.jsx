import React from 'react'
import './testimonials.css'

import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data =[
{

  avater :AVTR1,
  name:'Tina Show',
  review: 'loLorem ipsum aiores impedit laborum esse deserunt saepe nat'
},
{

  avater :AVTR2,
  name:'Tina Show',
  review: 'loLorem ipsum aiores impedit laborum esse deserunt saepe nat'
},
{

  avater :AVTR3,
  name:'Tina Show',
  review: 'loLorem ipsum aiores impedit laborum esse deserunt saepe nat'
},
{

  avater :AVTR4,
  name:'Tina Show',
  review: 'loLorem ipsum aiores impedit laborum esse deserunt saepe nat'
}

]

const Testimonials = () => {
  return (
    <section id ='testimonials'>
      <h5>Review From Client</h5>
      <h2>Testmolisal</h2>
      <Swiper className="container testmonials__container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
    

       {
        data.map(({avater ,name,review},index) =>{
          return(
            <SwiperSlide kry ={index} className='testmonials'>
            <div className="client__avater">
            <img src={avater}/>
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
           
  
          </SwiperSlide> 
          )

        })
       }
       
      </Swiper>
    </section>
  )
}

export default Testimonials 