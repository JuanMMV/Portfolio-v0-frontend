import React from 'react'
import './testimonial.css'
import AVATAR1 from '../../assets/projectsPictures/post.PNG'
import AVATAR2 from '../../assets/projectsPictures/post.PNG'
import AVATAR3 from '../../assets/projectsPictures/post.PNG'
import AVATAR4 from '../../assets/projectsPictures/post.PNG'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
	{
		avatar: AVATAR1,
		name:'Tina Snow',
		review:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas consectetur expedita est vero aperiam, doloremque vel harum quibusdam mollitia iusto aspernatur, dicta praesentium dolorum dolor, porro reprehenderit perspiciatis inventore similique.'
	},
	{
		avatar: AVATAR2,
		name:'Shatta wWle',
		review:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas consectetur expedita est vero aperiam, doloremque vel harum quibusdam mollitia iusto aspernatur, dicta praesentium dolorum dolor, porro reprehenderit perspiciatis inventore similique.'
	},
	{
		avatar: AVATAR3,
		name:'Kwame Despite',
		review:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas consectetur expedita est vero aperiam, doloremque vel harum quibusdam mollitia iusto aspernatur, dicta praesentium dolorum dolor, porro reprehenderit perspiciatis inventore similique.'
	},
	{
		avatar: AVATAR4,
		name:'Nombre',
		review:'esta ok.'
	}
]

const Testimonial = () => {
	return (
		<section id='testimonials'>
	  		<h5>Review from clients</h5>
	  		<h2>Testimonials</h2>

	  		<Swiper 
				className="container testimonials__container"
			    // install Swiper modules
				modules={[ Pagination ]}
				spaceBetween={40}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				{
					data.map(({ avatar, name, review }, index)=> {
						return(
							<SwiperSlide key={index} className="testimonial">
								<div className="client__avatar">
							  		<img src={avatar} alt={name} />
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

export default Testimonial