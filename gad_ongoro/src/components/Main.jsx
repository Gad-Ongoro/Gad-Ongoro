import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Projects from './Projects';

function Main() {
	const responsive = {
		desktop: {
		  breakpoint: { max: 3000, min: 1024 },
		  items: 3,
		  slidesToSlide: 1
		},
		tablet: {
		  breakpoint: { max: 1024, min: 464 },
		  items: 2,
		  slidesToSlide: 1
		},
		mobile: {
		  breakpoint: { max: 464, min: 0 },
		  items: 1,
		  slidesToSlide: 1
		}
	  };

	return (
		<div className=''>
			<div className="main">

				<Routes>
					<Route path='/projects/*' element={<Projects></Projects>}></Route>
				</Routes>

				<div className="about-container">
					<div className="about" id="about">

						<div className="div-gif">
							<img src="https://gad-ongoro.github.io/personal-portfolio/JavaScript%20frameworks.gif" alt="Hello World!"></img>
						</div>

						<div className="overview">
							<div>
								<code>👋 I'm Gad, a dedicated full-stack software engineer with expertise in designing, developing, and deploying robust web applications.</code>
								
								<code>I'm proficient in front-end technologies such as HTML, CSS, and JavaScript, with a keen eye for creating intuitive and responsive user interfaces.</code>

								<code>My back-end proficiency includes Python, PHP, and Node.js, utilizing frameworks like Express and Django. I'm also experienced in database management using SQL and NoSQL databases.</code>

								<code> I'm adept at version control systems like Git and deployment on cloud platforms such as AWS, strong problem-solving skills, and a commitment to writing clean, efficient, and scalable code. I've proven my ability to collaborate in cross-functional teams, delivering high-quality software solutions.</code>                             
							</div>
						</div>

					</div>
				</div>

				<div className="expertise" id="expertise">

					<div className="front-end">
						<h3>
							<code>Front-End Development</code>
						</h3>
						<p> 
							I wield expertise in crafting immersive user experiences. Proficient in HTML, CSS, and JavaScript, I design visually appealing and responsive interfaces. My skill set extends to popular frameworks like React, enabling dynamic and interactive web applications. I focus on optimizing user interface performance and ensuring cross-browser compatibility. Through a user-centered approach, I create intuitive and accessible designs, incorporating best practices in UX/UI. From responsive layouts to seamless integration with back-end systems, my front-end proficiency encompasses the entire spectrum of web development, delivering engaging and user-friendly digital experiences. 
						</p>
					</div>

					<div className="back-end">
						<h3>
							<code>Back-End Development</code>
						</h3>
						<p>
							As a software engineer, my expertise lies in MySQL-centric backend development. Proficient in Python, Java, and Node.js, I specialize in crafting scalable solutions using frameworks like Django and Express, with MySQL as the focal point. I excel in designing and optimizing MySQL databases, ensuring performance and efficiency. From developing RESTful and GraphQL APIs to implementing microservices architectures, security measures, and DevOps integration, my skill set is finely tuned for MySQL-backed applications. My commitment to problem-solving and scalability is evident in streamlined MySQL queries, code optimization, and strategic system design, reflecting a focused and comprehensive approach to backend development.
						</p>
						
					</div>

				</div>

				<div className="cert container-fluid m-2">
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
				</div>

				<div className="work" id="work"></div>

			</div>
		</div>
	)
};

export default Main;