import IMG1 from '../assets/projectsPictures/AppMaestros.PNG'
import IMG2 from '../assets/projectsPictures/post.PNG'
import IMG3 from '../assets/projectsPictures/proyecto-pdf.png'
import IMG4 from '../assets/projectsPictures/react-rtk-crud.PNG'
import IMG5 from '../assets/portfolio5.png'
import IMG6 from '../assets/portfolio6.jpg'

export const projects = [
	{
		id:1,
		image: IMG1,
		title: 'App Maestros',
		github: "https://github.com/JuanMMV/AppMaestrosReact-Native",
		demo: "https://www.youtube.com/embed/F6pPKDFMHx8",
		technologies: [
			{
				technology:'React native'
			},
			{
				technology:'Expo'
			},
			{
				technology:'Docker'
			},
			{
				technology:'Laravel'
			},			
			{
				technology:'MySQL'
			}
		],
	},
	{
		id:2,
		image: IMG2,
		title: 'Frontend posts mern stack',
		github: "https://github.com/JuanMMV/frontend-posts-mern-stack",
		demo: "https://frontend-posts-mern-stack.vercel.app/",
		technologies: [
			{
				technology:'ReactJS'
			},
			{
				technology:'TailwindCSS'
			},
			{
				technology:'NodeJS'
			},
			{
				technology:'MongoDB'
			},
			{
				technology:'Express'
			},
			{
				technology:'Cloudinary API'
			},
		],
	},
	{
		id:3,
		image: IMG3,
		title: 'Generador PDF: documento de administracion de propiedad',
		github: "https://github.com/JuanMMV/generador-pdf-adm-propiedad",
		demo: "https://dribbble.com/Alien_pixels",
		technologies: [
			{
				technology:'Expo'
			},
			{
				technology:'React Native'
			},
		],
	},
	{
		id:4,
		image: IMG4,
		title: 'React RTK CRUD',
		github: "https://github.com/JuanMMV/react-rtk-crud",
		demo: "https://rtk-crud.netlify.app/",
		technologies: [
			{
				technology:'ReactJS'
			},
			{
				technology:'Redux Toolkit'
			},
			{
				technology:'TailwindCSS'
			},
		],
	},
	{
		id:5,
		image: IMG5,
		title: 'titulo del proyecto',
		github: "https://github.com",
		demo: "https://dribbble.com/Alien_pixels",
		technologies: [
			{
				technology:'ReactJS'
			},
			{
				technology:'Redux Toolkit'
			},
			{
				technology:'TailwindCSS'
			},
		],
	},
	{
		id:6,
		image: IMG6,
		title: 'This is a portafolio item title',
		github: "https://github.com",
		demo: "https://dribbble.com/Alien_pixels",
		technologies: [
			{
				technology:'ReactJS'
			},
			{
				technology:'Redux Toolkit'
			},
			{
				technology:'TailwindCSS'
			},
		],
	},
]
