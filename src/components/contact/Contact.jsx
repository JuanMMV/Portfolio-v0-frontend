import { useRef } from 'react';
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import emailjs from '@emailjs/browser'

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
	
		emailjs.sendForm(process.env.REACT_APP_MAIL_SERVICE_ID, process.env.REACT_APP_MAIL_TEMPLATE_ID, form.current, process.env.REACT_APP_MAIL_PUBLIC_KEY)
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
		  
		  e.target.reset()
	};

  	return (
		<section id='contact'>
	  		<h5>Ponte en contacto</h5>
	  		<h2>Contactame</h2>

	  		<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineEmail className='contact__option-icon' />
						<h4>Email</h4>
						<h5>juan.menares.developer@gmail.com</h5>
						<a href="mailto:juan.menares.developer@gmail.com" target='_blank'>Envía un mensaje</a>
					</article>
				</div>
				{/* END OF CONTACT OPCION */}
				<form ref={ form } onSubmit={ sendEmail }>
					<input type="text" name='name' placeholder='Nombre' required />
					<input type="email" name='email' placeholder='Email' required />
					<textarea name="message" rows="7" placeholder='Mensaje' required></textarea>
					<button type='submit' className='btn btn-primary'>Enviar mensaje</button>
				</form>
	  		</div>
		</section>
  	)
}

export default Contact