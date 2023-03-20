import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
	<header>
	  <div className="container header__container">

		<div className="me">
			<h4>Hola, soy</h4>
			<h1>Juan Menares</h1>
			<h4 className="text-light">Fullstack Developer</h4>
			<CTA />
		</div>

		<HeaderSocials />
		<a href='#contact' className='scroll__down'>Scroll Down</a>

	  </div>
	</header>
  )
}

export default Header