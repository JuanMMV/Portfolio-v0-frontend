import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from 'react-icons/bs'
import { experienceFrontend } from "../../helpers/experience/experienceFrontend";
import { experienceBackend } from "../../helpers/experience/experienceBackend";

const Experience = () => {
	return (
		<section id="experience">
			<h5>Que Skills tengo</h5>
			<h2>Mis Conocimientos</h2>

			<div className="container experience__container">
				
				<div className="experince__frontend">
					<h3>Frontend Development</h3>
					<div className="experience__content">
						{
							experienceFrontend.map(({name}, index) => {
								return(
									<article key={index} className="experience__details">
										<BsPatchCheckFill className="experience__details-icon" />
										<div>
											<h4>{name}</h4>
										</div>
									</article>
								)
							})
						}
					</div>
				</div>
				{/* END OF FRONTEND */}
				
				<div className="experince__backend">
					<h3>Backend Development</h3>
					<div className="experience__content">
						{
							experienceBackend.map(({name},index) => {
								return(
									<article key={index} className="experience__details">
										<BsPatchCheckFill className="experience__details-icon" />
										<div>
											<h4>{name}</h4>
										</div>
									</article>				
							
								)
							})
						}
					</div>
				</div>

			</div>
		</section>
	);
};

export default Experience;
