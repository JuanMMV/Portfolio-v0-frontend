// import { useState } from 'react'
// import './portfolio.css'
// import { projects } from '../../helpers/projects'
// import Modal from '../modal/Modal'

// import { Pagination, Navigation, Scrollbar, A11y  } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';


// const Portafolio = () => {

// 	const [modalVisible, setModalVisible] = useState(false)
// 	const [dataModal, setDataModal] = useState('')

// 	return (
// 		<section id='portfolio'>
// 			<h5>My Recent Work</h5>
// 			<h2>Portafolio</h2>
// 			<Swiper 
// 				className="container portafolio__container"
// 			    // install Swiper modules
// 				modules={[ Navigation, Pagination ]}
// 				spaceBetween={40}
// 				slidesPerView={3}
// 				pagination={{ clickable: true }}
// 				navigation = {true}
// 				// centeredSlides={true}
// 			>
// 				{
// 					projects.map(({ id, image, title, github, demo }) => {
// 						return(
// 							<SwiperSlide key={ id } className="portafolio__item">
// 								<div className="portafolio__item-image">
// 									<img src={ image } alt={ title } />
// 								</div>
// 								<h3>{ title }</h3>
// 								<div className="portafolio__item-cta">
// 									<a href={github} className='btn' target='_blank'>Github</a>
// 									{!demo.includes('https://www.youtube.com') ? (
// 										<a href={demo} className='btn btn-primary' target='_blank'> Demo </a>
// 										) : (
// 											<span 
// 												className ='btn btn-primary' 
// 												onClick = { () => {
// 													setModalVisible(true)
// 													setDataModal(demo)
// 												}}
// 											> Demo video </span>
// 										)
// 									}
// 								</div>
// 							</SwiperSlide>
// 						)
// 					})
// 				}
// 			</Swiper>
// 			<Modal 
// 				modalVisible = {modalVisible} 
// 				setModalVisible= {setModalVisible} 
// 				dataModal = { dataModal } 
// 				setDataModal = {setDataModal} 
// 			/>
// 		</section>
//   	)
// }

// export default Portafolio

import { useEffect, useState } from 'react'
import './portfolio.css'
import { projects } from '../../helpers/projects'
import Modal from '../modal/Modal'


const Portafolio = () => {

	const [modalVisible, setModalVisible] = useState(false)
	const [dataModal, setDataModal] = useState('')

	useEffect(() => {
		if(modalVisible){
			document.body.style.overflow = 'hidden'
		  } else {
			document.body.style.overflow = 'auto'
		  }
	}, [modalVisible])
	

	return (
		<section id='portfolio'>
			<h5>My Recent Work</h5>
			<h2>Portafolio</h2>

			<div className="container portafolio__container">
				{
					projects.map(({id, image, title, github, demo, technologies}) =>{
						return(
							<article key={id} className="portafolio__item">
								<div className="portafolio__item-image">
									<img 
										src={image} 
										alt={title} 
										className="portafolio__image" 
										onClick = { () => {
											setModalVisible(true)
											setDataModal(image)
										}}
									/>
								</div>
								<h3>{title}</h3>
								<div className='portafolio__technologies'>
									{technologies.map(({technology}, index) => {
										return(
											<h5 key={index}>{technology}</h5>
										)
									})}
								</div>
								<div className="portafolio__item-cta">
									<a href={github} className='btn' target='_blank'>Github</a>
									{!demo.includes('https://www.youtube.com') ? (
										<a href={demo} className='btn btn-primary' target='_blank'> Demo </a>
										) : (
											<span 
												className ='btn btn-primary' 
												onClick = { () => {
													setModalVisible(true)
													setDataModal(demo)
												}}
											> Demo video </span>
										)
									}
								</div>
							</article>
						)
					})
				}
			</div>
			<Modal 
				modalVisible = {modalVisible} 
				setModalVisible= {setModalVisible} 
				dataModal = { dataModal } 
				setDataModal = {setDataModal} 
			/>
		</section>
  	)
}

export default Portafolio