import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
	return (
		<footer>
			<a href="#" className='footer__logo'>Juan Menares</a>
			<ul className='permalinks'>
				<li><a href="#">Home</a></li>
				<li><a href="#about">Acerca de mí</a></li>
				<li><a href="#experience">Mis Skills</a></li>
				<li><a href="#portfolio">Portafolio</a></li>
				<li><a href="#contact">Contactame</a></li>
			</ul>

			<div className="footer__socials">
				<a href='https://www.linkedin.com/in/juan-menares-vega-ba29b61a3/'><BsLinkedin /></a>
				<a href='https://github.com/JuanMMV'><FaGithub /></a>
			</div>

			<div className="footer__copyright">
				<small>活 Juan Menares portfolio</small>
			</div>
		</footer>
  	)
}

export default Footer