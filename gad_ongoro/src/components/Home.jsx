import React from 'react';
import AnimatedPage from './AnimatedPage';
import Footer from './Footer';

function Home() {
	const frontEndSkillsList = ['JavaScript', 'React JS', 'Material UI', 'Tailwind CSS', 'Bootstrap V', 'CSS', 'SASS', 'Figma'];
	const backEndSkillsList = ['Python', 'Django', 'Flask', 'Node JS', 'Express JS', 'MySQL', 'PostgreSQL', 'API Development'];
	const devOpsList = ['CI/CD', 'Docker', 'AWS', 'Git', 'Linux', 'Render', 'Vercel', 'Netlify'];

	const frontEndSkills = frontEndSkillsList.map((skill) => {
		return (
			<code key={skill} className='bg-violet-500 text-white border rounded m-2 p-2 hover:cursor-pointer'>{skill}</code>
		)
	});

	const backEndSkills = backEndSkillsList.map((skill) => {
		return (
			<code key={skill} className='bg-violet-500 text-white border rounded m-2 p-2 hover:cursor-pointer'>{skill}</code>
		)
	});

	const devOps = devOpsList.map((skill) => {
		return (
			<code key={skill} className='bg-violet-500 text-white border rounded m-2 p-2 hover:cursor-pointer'>{skill}</code>
		)
	})

	return (
		<AnimatedPage>
		<div className=''>
			<div className="">
				<div className="p-2 grid md:flex justify-between items-center">

					<div className="div-gif">
						{/* <img src="https://gad-ongoro.github.io/personal-portfolio/JavaScript%20frameworks.gif" alt="Hello World!" className='md:hidden'></img> */}
						<img src="DP-removebg-preview.png" alt="NA" className='hidden md:block' />
					</div>

					<div className="overview">
						<div>
							<code className='m-2 text-gray-950'>👋 I'm Gad, an ambitious full-stack software developer.
								Just an <span className='text-primary'><a href='mailto:gadongoro1@gmail.com'>email</a></span> away to save the day,
								I design, develop, and deploy robust web applications.
							</code>
						</div>
					</div>

				</div>
			</div>

			<div className='skills_container'>
				<div className="expertise container" id="expertise">
					<div className="front-end m-3">
						<h3>
							<code className=''>Front-End Web Development</code>
						</h3>
						<div>
							<div className='container d-flex flex-wrap'>
								{frontEndSkills}
							</div>
							<code className='text-gray-950'>I wield expertise in crafting immersive user experiences using HTML, CSS, and JavaScript, designing visually appealing and responsive interfaces incorporated with popular frameworks like React to enable dynamic and interactive web applications.
								I focus on optimizing user interface performance, ensuring cross-browser compatibility, and integration with back-end systems.
								Through a user-centered approach, my front-end proficiency encompasses the entire spectrum of web development, delivering engaging and user-friendly digital experiences. </code>
						</div>
					</div>

					<div className="back-end m-3">
						<h3>
							<code>Back-End Web Development</code>
						</h3>
						<div>
							<div className='container d-flex flex-wrap'>
								{backEndSkills}								
							</div>

							<code className='text-gray-950'>I possess a strong skill set in backend web development,
								with proficiency in Python frameworks such as Django and Flask,
								as well as JavaScript technologies like Node.js and Express.js.
								Within Python, I effectively manage projects utilizing Django's built-in features, including its powerful Object-Relational Mapping (ORM) system, 
								and optimize database interactions using SQLAlchemy. 
								In JavaScript, I excel at building high-performance backend services, ensuring seamless communication between frontend and backend components.
								Additionally, I have expertise in SQL databases like PostgreSQL and MySQL, where I design and optimize relational databases to maintain data integrity and enhance performance. 
								Leveraging ORM systems like Django's ORM and Sequelize in Node.js, I streamline database operations, enhancing code readability and maintainability.
							</code>
						</div>
					</div>

					<div className="dev-ops m-3">
						<h3>
							<code className=''>Dev-Ops</code>
						</h3>
						<div>
							<div className='container d-flex flex-wrap'>
								{devOps}
							</div>
							<code className='text-gray-950 m-2'>
								I'm adept at version control systems like Git and deployment on cloud platforms such as AWS,
								using Docker to enable seamless containerization and deployment of applications. 
								I have strong problem-solving skills, a commitment to writing clean, efficient, and scalable code, 
								and experience with Continuous Integration/Continuous Deployment (CI/CD) pipelines to automate the software delivery process.
								I've proven my ability to collaborate in cross-functional teams, delivering high-quality software solutions.
							</code>
						</div>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
		</AnimatedPage>
	)
};

export default Home;