import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
	<section id='about'>
	  <h5>Conoceme</h5>
	  <h2>Acerca de mí</h2>
	  <div className="container about__container">
		<div className="about__me">
			<div className="about__me-image">
				<img src={ME} alt="me" />
			</div>
		</div>

		<div className="about__content">
			<div className="about__cards">
				<article className='about__card'>
					<VscFolderLibrary className='about__icon' />
					<h5>Proyectos</h5>
					<small>5+ Completados</small>
				</article>
			</div>

			<p>
				Soy un Técnico en Programación Computacional titulado con distinción del Instituto Profesional CIISA y con un promedio final de 6.0 (sobre 7.0). Soy una persona responsable, dedicada, honesta y con una gran pasión por seguir aprendiendo.<br />
				Tengo experiencia en el desarrollo de aplicaciones móviles con React Native (expo), Laravel y Docker, tecnologías que utilicé en mi proyecto de título. Además, cuento con experiencia en otras tecnologías como React JS, Node JS, Vanilla JS, MySQL, SQL Server, MongoDB y CSS, entre otras que he utilizado en proyectos más pequeños.<br />
				Actualmente, me encuentro aprendiendo Python y estoy mejorando mi nivel de inglés.<br />
			</p>

			<a href="#contact" className='btn btn-primary'>Contactame</a>
		</div>
	  </div>
	</section>
  )
}

export default About