import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Projects() {
	let [iframeSrc, setIframeSrc] = useState('https://254events.vercel.app/home')
	return (
		<div className='bg-white'>
			<div className='container-fluid text-center'>
				{/* <h2> <code>My Projects</code> </h2> */}
				<NavLink
				to={'/projects/safaris'} exact 
				className={'m-2 p-1 text-decoration-none border rounded-pill'}
				onClick={() => {setIframeSrc('https://spartans-safaris.vercel.app/accommodations')}}
				>Spartans Safaris</NavLink>

				<NavLink
				to={'/projects/gamestoreke'} exact 
				className={'m-2 p-1 text-decoration-none border rounded-pill'}
				onClick={() => {setIframeSrc('https://game-store-seven-xi.vercel.app/')}}
				>Game Store</NavLink>

				<NavLink
				to={'/projects/car_shop_254'} exact 
				className={'m-2 p-1 text-decoration-none border rounded-pill'}
				onClick={() => {setIframeSrc('https://gad-ongoro.github.io/Phase-1-Week-4-Independent-Project')}}
				>Car Shop</NavLink>

				<NavLink
				to={'/projects/events'} exact 
				className={'m-2 p-1 text-decoration-none border rounded-pill'}
				onClick={() => {setIframeSrc('https://254events.vercel.app/home')}}
				>Events</NavLink>

				<div className="projects mt-4" id="projects">
					<div className='m-1 w-100 text-center projects-info_container'>
						<div className='external_link p-0 rounded-pill d-flex text-align-center justify-content-center'>
							<h5 className='p-0 m-0'><a className='text-decoration-none' href={iframeSrc} target='_blank' rel='noreferrer'>New tab <img src="https://cdn-icons-png.flaticon.com/128/12690/12690013.png" alt="NA" width={20} /></a></h5> 
						</div>
						<iframe src={iframeSrc} className="my-projects" title='web-projects' frameborder="0"> CarShop </iframe>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Projects;