import { useRef } from 'react';
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
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
	  		<h5>Get In Touch</h5>
	  		<h2>Contact Me</h2>

	  		<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineEmail className='contact__option-icon' />
						<h4>Email</h4>
						<h5>email@email.com</h5>
						<a href="mailto:yopeyiw969@v2ssr.com" target='_blank'>Send a message</a>
					</article>
					<article className="contact__option">
						<RiMessengerLine className='contact__option-icon' />
						<h4>Messenger</h4>
						<h5>Nombre facebook</h5>
						<a href="https://m.me/HunterX1" target='_blank'>Send a message</a>
					</article>
					<article className="contact__option">
						<BsWhatsapp className='contact__option-icon' />
						<h4>WhatsApp</h4>
						<h5>email@email.com</h5>
						<a href="https://api.whatsapp.com/send?phone =+11111111111" target='_blank'>Send a message</a>
					</article>
				</div>
			{/* END OF CONTACT OPCION */}
			<form ref={ form } onSubmit={ sendEmail }>
				<input type="text" name='name' placeholder='Your full name' required />
				<input type="email" name='email' placeholder='Your email' required />
				<textarea name="message" rows="7" placeholder='Your message' required></textarea>
				<button type='submit' className='btn btn-primary'>Send Message</button>
			</form>
	  		</div>
		</section>
  	)
}

export default Contact