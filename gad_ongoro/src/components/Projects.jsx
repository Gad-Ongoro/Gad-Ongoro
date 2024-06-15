import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import AnimatedPage from './AnimatedPage';
import Footer from './Footer';

function Projects() {
	let [iframeSrc, setIframeSrc] = useState('https://go-bank-seven.vercel.app/');
	let location = useLocation();
	console.log(location.pathname);
	const projectsNavLinks = [
		{
			name: 'Bank Management',
			link: 'https://go-bank-seven.vercel.app/',
			to: '/projects/go_bank',
			className: 'm-2 p-1 text-decoration-none border rounded',
			onClick: () => {setIframeSrc('https://go-bank-seven.vercel.app/')},

		},
		{
			name: 'Tours & Travels',
			link: 'https://spartans-safaris.vercel.app/accommodations',
			to: '/projects/safaris',
			className: 'm-2 p-1 text-decoration-none border rounded',
			onClick: () => {setIframeSrc('https://spartans-safaris.vercel.app/accommodations')},
		},
		{
			name: 'E-Commerce Store',
			link: 'https://game-store-seven-xi.vercel.app/',
			to: '/projects/gamestoreke',
			className: 'm-2 p-1 text-decoration-none border rounded',
			onClick: () => {setIframeSrc('https://game-store-seven-xi.vercel.app/')},
		},
		{
			name: 'Event Management',
			link: 'https://254events.vercel.app/home',
			to: '/projects/events',
			className: 'm-2 p-1 text-decoration-none border rounded',
			onClick: () => {setIframeSrc('https://254events.vercel.app/home')},
		}
	]

	const projectsNavs = projectsNavLinks.map((project, index) => {
		return (
			<NavLink
				key={index}
				to={project.to} exact
				className={project.className}
				onClick={project.onClick}
			>
				{project.name}
			</NavLink>
		)
	})

	return (
		<AnimatedPage>
		<div className='bg-white'>
			<div className='container-fluid text-center'>
				<div className='project-navlinks d-flex justify-content-center flex-wrap'>
					{projectsNavs}
				</div>

				<div className="projects mt-4" id="projects">
					<div className='projects-info_container m-1'>
						<div className='external_link p-0 rounded-pill d-flex text-align-center justify-content-center'>
							<h5 className='text-dark'><a className='text-decoration-none' href={iframeSrc} target='_blank' rel='noreferrer'>New tab <img className='d-inline' src="https://cdn-icons-png.flaticon.com/128/12690/12690013.png" alt="NA" width={20} /></a></h5> 
						</div>

						<div className='iframe_div'>
							<iframe src={iframeSrc} className="my-projects" title='web-projects' frameborder="0"> CarShop </iframe>
						</div>
					</div>

				</div>

			</div>

			<Footer></Footer>
		</div>
		</AnimatedPage>
	)
}

export default Projects;