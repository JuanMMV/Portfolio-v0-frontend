import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
	<section id='about'>
	  <h5>Get to Know</h5>
	  <h2>Sobre mi</h2>
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
					<h5>Projects</h5>
					<small>80+ Completed</small>
				</article>
			</div>

			<p>
				Técnico en programación computacional titulado con distinción del Instituto Profesional CIISA con promedio final de 6.0<br />
				Responsable, dedicado, honesto y con ansias de seguir aprendiendo.<br />
				Tengo experiencia trabajando en React Native(expo), Laravel y Docker, las que fueron las tecnologías que utilice en mi proyecto de título.<br />
				También cuento con experiencia en React JS, Node JS, Vanilla JS, MySQL, SQL Server, MongoDB, CSS. Entre otra tecnología que he utilizado en proyectos pequeños.<br />
				Actualmente me encuentro aprendiendo Python y estoy aprendiendo inglés.<br />
			</p>

			<a href="#contact" className='btn btn-primary'>Contactame</a>
		</div>
	  </div>
	</section>
  )
}

export default About