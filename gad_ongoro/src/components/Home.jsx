import React from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

function Home() {
	// const responsive = {
	// 	desktop: {
	// 	  breakpoint: { max: 3000, min: 1024 },
	// 	  items: 3,
	// 	  slidesToSlide: 1
	// 	},
	// 	tablet: {
	// 	  breakpoint: { max: 1024, min: 464 },
	// 	  items: 2,
	// 	  slidesToSlide: 1
	// 	},
	// 	mobile: {
	// 	  breakpoint: { max: 464, min: 0 },
	// 	  items: 1,
	// 	  slidesToSlide: 1
	// 	}
	//   };


	return (
		<div className=''>
			{/* <Routes>
				<Route path='/projects/*' element={<Projects></Projects>}></Route>
			</Routes> */}

			<div className="about-container">
				<div className="about" id="about">

					<div className="div-gif">
						{/* <img src="https://gad-ongoro.github.io/personal-portfolio/JavaScript%20frameworks.gif" alt="Hello World!"></img> */}
						<img src="DP-removebg-preview.png" alt="NA" />
					</div>

					<div className="overview">
						<div>
							<code className='m-2'>👋 I'm Gad, a dedicated full-stack software engineer.
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
								<code className='front-end-skills text-white border rounded m-2 p-2 hover:cursor-pointer'>JavaScript</code>
								<code className='front-end-skills text-white border rounded m-2 p-2 hover:cursor-pointer'>React JS</code>
								<code className='front-end-skills text-white border rounded m-2 p-2 hover:cursor-pointer'>Material UI</code>
								<code className='front-end-skills text-white border rounded m-2 p-2 hover:cursor-pointer'>Tailwind CSS</code>
								<code className='front-end-skills text-white border rounded m-2 p-2 hover:cursor-pointer'>Bootstrap V</code>
								<code className='front-end-skills text-white border rounded m-2 p-2 hover:cursor-pointer'>CSS</code>
								<code className='front-end-skills text-white border rounded m-2 p-2 hover:cursor-pointer'>SASS</code>
								<code className='front-end-skills text-white border rounded m-2 p-2 hover:cursor-pointer'>Figma</code>
							</div>
							<code>I wield expertise in crafting immersive user experiences using HTML, CSS, and JavaScript, designing visually appealing and responsive interfaces incorporated with popular frameworks like React to enable dynamic and interactive web applications.
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
								<code className='back-end-skills text-white border rounded m-2 p-2 hover:cursor-pointer'>Python</code>
								<code className='back-end-skills text-white border rounded m-2 p-2 hover:cursor-pointer'>Django</code>
								<code className='back-end-skills text-white border rounded m-2 p-2 hover:cursor-pointer'>FLask</code>
								<code className='back-end-skills text-white border rounded m-2 p-2 hover:cursor-pointer'>Node JS</code>
								<code className='back-end-skills text-white border rounded m-2 p-2 hover:cursor-pointer'>Express JS</code>
								<code className='back-end-skills text-white border rounded m-2 p-2 hover:cursor-pointer'>MySQL</code>
								<code className='back-end-skills text-white border rounded m-2 p-2 hover:cursor-pointer'>PostgreSQL</code>
								<code className='back-end-skills text-white border rounded m-2 p-2 hover:cursor-pointer'>API Development</code>
							</div>
							<code>I possess a strong skill set in backend web development,
								with proficiency in Python frameworks such as Django and Flask,
								as well as JavaScript technologies like Node.js and Express.js.
								Within Python, I effectively manage projects utilizing Django's built-in features, including its powerful Object-Relational Mapping (ORM) system, and optimize database interactions using SQLAlchemy. In JavaScript, I excel at building high-performance backend services, ensuring seamless communication between frontend and backend components. Additionally, I have expertise in SQL databases like PostgreSQL and MySQL, where I design and optimize relational databases to maintain data integrity and enhance performance. Leveraging ORM systems like Django's ORM and Sequelize in Node.js, I streamline database operations, enhancing code readability and maintainability. </code>
						</div>
					</div>

					<div className="dev-ops m-3">
						<h3>
							<code className=''>Dev-Ops</code>
						</h3>
						<div>
							<div className='container d-flex flex-wrap'>
								<code className='dev-ops-skills text-white border rounded m-2 p-2 hover:cursor-pointer'>CI/CD</code>
								<code className='dev-ops-skills text-white border rounded m-2 p-2 hover:cursor-pointer'>Docker</code>
								<code className='dev-ops-skills text-white border rounded m-2 p-2 hover:cursor-pointer'>AWS</code>
								<code className='dev-ops-skills text-white border rounded m-2 p-2 hover:cursor-pointer'>Git</code>
								<code className='dev-ops-skills text-white border rounded m-2 p-2 hover:cursor-pointer'>Linux</code>
							</div>
							<code className='m-2'> 
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

			{/* <div className="cert container-fluid m-2">
				<Carousel
					swipeable={true}
					draggable={false}
					showDots={true}
					responsive={responsive}
					ssr={true}
					autoPlay={true}
					infinite={true}
					keyBoardControl={true}
					customTransition="all 2s ease-in-out"
					containerClass="carousel-container"
					removeArrowOnDeviceType={["tablet", "mobile"]}
					dotListClass="custom-dot-list-style"
					itemClass="carousel-item-padding-40-px"
					>
						<div className='text-center'>
							<img src="https://api2.sololearn.com/v2/certificates/CC-EQIRQNWC/image/png" alt="Web Development"></img>
						</div>
						<div className='text-center'>
							<img src="https://api2.sololearn.com/v2/certificates/CC-IKS2UDAX/image/png" alt="HTML"></img>
						</div>
						<div className='text-center'>
							<img src="https://api2.sololearn.com/v2/certificates/CC-IQM3PG3S/image/png" alt="CSS"></img>
						</div>
						<div className='text-center'>
							<img src="https://api2.sololearn.com/v2/certificates/CC-359JCKXK/image/png" alt="JavaScript"></img>
						</div>
						<div className='text-center'>
							<img src="https://api2.sololearn.com/v2/certificates/CC-YVAF8VMU/image/png" alt="Python"></img>
						</div>
						<div className='text-center'>
							<img src="https://api2.sololearn.com/v2/certificates/CC-YNTOYVQ8/image/png" alt="Tech For Everyone"></img>
						</div>
				</Carousel>
			</div> */}

			<div className="work" id="work"></div>
		</div>
	)
};

export default Home;