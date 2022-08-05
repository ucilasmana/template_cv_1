import React from 'react'
import './testimonials.css'
import profpic from '../../assets/clientpic.png'
import { Navigation, Pagination, Autoplay} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";

const data = [
  {
    avatar: profpic,
    name: 'Testimonial from Client 1',
    review: 'Loren ipsum dolor sit amet consectetur adipising elit. Loren ipsum dolor sit amet consectetur adipising elit.Loren ipsum dolor sit amet consectetur adipising elit'
  },
  {
    avatar: profpic,
    name: 'Testimonial from Client 2',
    review: 'Loren ipsum dolor sit amet consectetur adipising elit. Loren ipsum dolor sit amet consectetur adipising elit.Loren ipsum dolor sit amet consectetur adipising elit'
  },
  {
    avatar: profpic,
    name: 'Testimonial from Client 3',
    review: 'Loren ipsum dolor sit amet consectetur adipising elit. Loren ipsum dolor sit amet consectetur adipising elit.Loren ipsum dolor sit amet consectetur adipising elit'
  },{
    avatar: profpic,
    name: 'Testimonial from Client 4',
    review: 'Loren ipsum dolor sit amet consectetur adipising elit. Loren ipsum dolor sit amet consectetur adipising elit.Loren ipsum dolor sit amet consectetur adipising elit'
  },
]


const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      centeredSlides={true}
        autoplay={{
          delay: 6000,
          
        }}
      navigation
      pagination={{ clickable: true }}> 
      { 
        data.map(({avatar, name, review}, index) => {
        return (
          <SwiperSlide key={index} className='testimonial'>
            <div className='client__avatar'>
            <img src={avatar}/>
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
          </SwiperSlide>
        )
        })}
      </Swiper>
      <div >
      
      </div>
    </section>
  )
}

export default testimonials