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
							<code className='m-2'>👋 I'm Gad, your friendly neighbourhood full-stack software engineer, just an <span className='text-primary'><a href='mailto:gadongoro1@gmail.com'>email</a></span> away to save the day,
							I design, develop, and deploy robust web applications.</code>
							
							{/* <code className='m-2'>
								I'm proficient in front-end technologies such as HTML, CSS, and JavaScript, with a keen eye for creating intuitive and responsive user interfaces.
								My back-end proficiency includes Python, PHP, and Node.js, utilizing frameworks like Flask, Express, and Django. I'm also experienced in database management using SQL and NoSQL databases.
							</code> */}
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
								<code className='front-end-skills text-white border rounded m-2 p-2 hover:cursor-pointer'>Tailwind CSS</code>
								<code className='front-end-skills text-white border rounded m-2 p-2 hover:cursor-pointer'>Bootstrap V</code>
								<code className='front-end-skills text-white border rounded m-2 p-2 hover:cursor-pointer'>CSS</code>
								<code className='front-end-skills text-white border rounded m-2 p-2 hover:cursor-pointer'>SASS</code>
								<code className='front-end-skills text-white border rounded m-2 p-2 hover:cursor-pointer'>Figma</code>
							</div>
							<code>I wield expertise in crafting immersive user experiences. Proficient in HTML, CSS, and JavaScript, I design visually appealing and responsive interfaces. My skill set extends to popular frameworks like React, enabling dynamic and interactive web applications. I focus on optimizing user interface performance and ensuring cross-browser compatibility. Through a user-centered approach, I create intuitive and accessible designs, incorporating best practices in UX/UI. From responsive layouts to seamless integration with back-end systems, my front-end proficiency encompasses the entire spectrum of web development, delivering engaging and user-friendly digital experiences. </code>
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
								<code className='back-end-skills text-white border rounded m-2 p-2 hover:cursor-pointer'>PHP</code>
								<code className='back-end-skills text-white border rounded m-2 p-2 hover:cursor-pointer'>MySQL</code>
								<code className='back-end-skills text-white border rounded m-2 p-2 hover:cursor-pointer'>PostgreSQL</code>
								<code className='back-end-skills text-white border rounded m-2 p-2 hover:cursor-pointer'>API Development</code>
							</div>
							<code>As a software engineer, my expertise lies in MySQL-centric backend development. Proficient in Python, Java, and Node.js, I specialize in crafting scalable solutions using frameworks like Django and Express, with MySQL as the focal point. I excel in designing and optimizing MySQL databases, ensuring performance and efficiency. From developing RESTful and GraphQL APIs to implementing microservices architectures, security measures, and DevOps integration, my skill set is finely tuned for MySQL-backed applications. My commitment to problem-solving and scalability is evident in streamlined MySQL queries, code optimization, and strategic system design, reflecting a focused and comprehensive approach to backend development. </code>
						</div>
					</div>

					<div className="dev-ops m-3">
						<h3>
							<code className=''>Dev-Ops</code>
						</h3>
						<div>
							<div className='container d-flex flex-wrap'>
								<code className='dev-ops-skills text-white border rounded m-2 p-2 hover:cursor-pointer'>Docker</code>
								<code className='dev-ops-skills text-white border rounded m-2 p-2 hover:cursor-pointer'>AWS</code>
								<code className='dev-ops-skills text-white border rounded m-2 p-2 hover:cursor-pointer'>Git</code>
								<code className='dev-ops-skills text-white border rounded m-2 p-2 hover:cursor-pointer'>Linux</code>
							</div>
							<code className='m-2'> 
								I'm adept at version control systems like Git and deployment on cloud platforms such as AWS,
								using Docker to enable seamless containerization and deployment of applications, 
								strong problem-solving skills, and a commitment to writing clean, efficient, and scalable code.
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