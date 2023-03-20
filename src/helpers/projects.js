import IMG1 from '../assets/projectsPictures/AppMaestros.PNG'
import IMG2 from '../assets/projectsPictures/post.PNG'
import IMG3 from '../assets/projectsPictures/proyecto-pdf.png'
import IMG4 from '../assets/projectsPictures/react-rtk-crud.PNG'

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
		demo: "https://www.youtube.com/embed/8U3oIt61taE?feature=share",
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
]
