import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Projects() {
	let [iframeSrc, setIframeSrc] = useState('https://254events.vercel.app/home')
	return (
		<div className='container-fluid text-center'>
			<h2> <code>My Projects</code> </h2>
			<NavLink
			to={'/projects/safaris'} exact 
			className={'d-block text-white text-decoration-none'}
			onClick={() => {setIframeSrc('')}}
			>Spartans Safaris</NavLink>

			<NavLink
			to={'/projects/gamestoreke'} exact 
			className={'d-block text-white text-decoration-none'}
			onClick={() => {setIframeSrc('https://game-store-seven-xi.vercel.app/')}}
			>Game Store 254</NavLink>

			<NavLink
			to={'/projects/car_shop_254'} exact 
			className={'d-block text-white text-decoration-none'}
			onClick={() => {setIframeSrc('https://gad-ongoro.github.io/Phase-1-Week-4-Independent-Project')}}
			>Car Shop 254</NavLink>

			<NavLink
			to={'/projects/events'} exact 
			className={'d-block text-white text-decoration-none'}
			onClick={() => {setIframeSrc('https://254events.vercel.app/home')}}
			>Events</NavLink>

			<div className="projects" id="projects">
				<div className='m-1 w-100 text-center'>
					<iframe src={iframeSrc} className="my-projects" title='web-projects' frameborder="0"> CarShop </iframe>
				</div>
			</div>
		</div>
	)
}

export default Projects;