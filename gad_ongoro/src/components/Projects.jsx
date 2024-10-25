import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import AnimatedPage from './AnimatedPage';
import Footer from './Footer';

function Projects() {
	let [iframeSrc, setIframeSrc] = useState('https://gofoods-six.vercel.app/');
	let [ projectDescription, setProjectDescription ] = useState('');
	let [ projectGitHubLink, setProjectGitHubLink ] = useState('https://github.com/Gad-Ongoro/lisha');
	let location = useLocation();
	console.log(location.pathname);
	const projectsNavLinks = [
		{
			name: 'AgriTech E-Commerce',
			description: `Programmed an e-commerce platform connecting fishermen and agricultural farmers to local and international markets. 
				Crafted exclusively with Python (Django, Django Rest Framework) and JavaScript (React), 
				the platform enables users to buy and sell a diverse range of agricultural products, including vegetables, fruits, seafood, and more. 
				The project features JWT-based authentication, Google ReCAPTCHA, and a mobile version developed with Flutter. 
				Additionally, web scraping capabilities are integrated to gather real-time market data, 
				providing users with up-to-date information on agricultural prices and trends, thereby bridging the gap between producers and consumers.`,
			link: 'https://gofoods-six.vercel.app/',
			githubLink: 'https://github.com/Gad-Ongoro/lisha',
			to: '/projects/gofoods',
			className: 'm-2 p-1 text-decoration-none border rounded',
			onClick: () => {
				setIframeSrc('https://gofoods-six.vercel.app/'); 
				setProjectDescription('An e-commerce platform connecting fishermen and agricultural farmers to markets.');
				setProjectGitHubLink('https://github.com/Gad-Ongoro/lisha');
			},
		},
		{
			name: 'Bank Management',
			description: `A web application that allows users to manage their bank accounts, deposits, and withdrawals.
				Users can create new accounts, deposit money, and withdraw money from their accounts.`,
			link: 'https://go-bank-seven.vercel.app/',
			githubLink: 'https://github.com/Gad-Ongoro/GO_Bank',
			to: '/projects/go_bank',
			className: 'm-2 p-1 text-decoration-none border rounded',
			onClick: () => {
				setIframeSrc('https://go-bank-seven.vercel.app/'); 
				setProjectDescription('A web application that allows users to manage their bank accounts, deposits, and withdrawals.');
				setProjectGitHubLink('https://github.com/Gad-Ongoro/GO_Bank');
			},
		},
		{
			name: 'E-Commerce Store',
			description: 'A web application that allows users to shop online. The application includes features such as adding items to cart, payment, and checkout.',
			link: 'https://game-store-seven-xi.vercel.app/',
			githubLink: 'https://github.com/Gad-Ongoro/GameStore',
			to: '/projects/gamestoreke',
			className: 'm-2 p-1 text-decoration-none border rounded',
			onClick: () => {setIframeSrc('https://game-store-seven-xi.vercel.app/'); 
				setProjectDescription('A web application that allows gamers to shop online.');
				setProjectGitHubLink('https://github.com/Gad-Ongoro/GameStore');},
		},
		{
			name: 'Event Management',
			description: 'A web application that allows users to manage their events. The application includes features such as booking, payment, and cancellation.',
			link: 'https://254events.vercel.app/home',
			githubLink: 'https://github.com/Gad-Ongoro/events',
			to: '/projects/events',
			className: 'm-2 p-1 text-decoration-none border rounded',
			onClick: () => {
				setIframeSrc('https://254events.vercel.app/home'); 
				setProjectDescription('A web application that allows users to book and manage events.');
				setProjectGitHubLink('https://github.com/Gad-Ongoro/events');},
		},
		{
			name: 'Tours & Travels',
			description: 'A web application that allows users to book tours and travel packages. The application includes features such as booking, payment, and cancellation.',
			link: 'https://spartans-safaris.vercel.app/accommodations',
			githubLink: 'https://github.com/Gad-Ongoro/Spartans_Safaris',
			to: '/projects/safaris',
			className: 'm-2 p-1 text-decoration-none border rounded',
			onClick: () => {
				setIframeSrc('https://spartans-safaris.vercel.app/accommodations'); 
				setProjectDescription('A web application that allows users to book tours and travel packages.');
				setProjectGitHubLink('https://github.com/Gad-Ongoro/Spartans_Safaris');},
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
		<div className='bg-white h-screen'>
			<div className='h-full'>
				<div className='container-fluid text-center'>
					<div className='project-navlinks d-flex justify-content-center flex-wrap'>
						{projectsNavs}
					</div>

					<div className='project-description'>
						<h3 className='text-gray-950 text-center font-medium text-2xl md:text-3xl'>
							{projectDescription}
						</h3>
					</div>

					<div>
						<p className='text-center'>
							View project on
							<a href={`${projectGitHubLink}`} target='_blank' rel='noreferrer' className='text-decoration-none text-blue-600'>
								<pre> GitHub</pre>
							</a>
						</p>
					</div>

					<div className="projects mt-4" id="projects">
						<div className='projects-info_container m-1'>
							<div className='external_link p-0 rounded-pill d-flex text-align-center justify-content-center'>
								<h5 className='text-dark'><a className='text-decoration-none text-blue-600' href={iframeSrc} target='_blank' rel='noreferrer'>New tab <img className='d-inline' src="https://cdn-icons-png.flaticon.com/128/12690/12690013.png" alt="NA" width={20} /></a></h5> 
							</div>

							<div className='iframe_div'>
								<iframe src={iframeSrc} className="my-projects" title='web-projects' frameborder="0"> CarShop </iframe>
							</div>
						</div>
					</div>

				</div>
			</div>

		</div>
		</AnimatedPage>
	)
}

export default Projects;