import React from 'react'
import './portfolio.css'
import { projects } from '../../helpers/projects'


const Portafolio = () => {
	return (
		<section id='portfolio'>
			<h5>My Recent Work</h5>
			<h2>Portafolio</h2>

			<div className="container portafolio__container">
				{
					projects.map(({id, image, title, github, demo}) =>{
						return(
							<article key={id} className="portafolio__item">
								<div className="portafolio__item-image">
									<img src={image} alt={title} />
								</div>
								<h3>{title}</h3>
								<div className="portafolio__item-cta">
									<a href={github} className='btn' target='_blank'>Github</a>
									<a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
								</div>
							</article>
						)
					})
				}
			</div>
		</section>
  	)
}

export default Portafolio