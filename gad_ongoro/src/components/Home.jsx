import React from 'react';
import AnimatedPage from './AnimatedPage';
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiDart } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoFigma } from "react-icons/io5";
import { SiPython } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { GiServerRack } from "react-icons/gi";
import { SiGithubactions } from "react-icons/si";
import { IoLogoDocker } from "react-icons/io5";
import { SiKubernetes } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import { SiRender } from "react-icons/si";
import { GrHeroku } from "react-icons/gr";
import { SiVercel } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { SiKalilinux } from "react-icons/si";
import { SiBurpsuite } from "react-icons/si";
import { SiSnyk } from "react-icons/si";
import { SiSonarqube } from "react-icons/si";
import Footer from './Footer';

function Home() {
	const frontEndSkillsList = [
		{ name: 'JavaScript', icon: TbBrandJavascript },
		{ name: 'React JS', icon: FaReact, rotate: true },
		{ name: 'Next.js', icon: SiNextdotjs },
		{ name: 'Material UI', icon: SiMui },
		{ name: 'Dart', icon: SiDart },
		{ name: 'Flutter', icon: SiFlutter },
		{ name: 'Tailwind CSS', icon: RiTailwindCssFill },
		{ name: 'Bootstrap V', icon: FaBootstrap },
		// { name: 'CSS', icon: IoLogoCss3 },
		// { name: 'SASS', icon: 'SassIcon' },
		// { name: 'Figma', icon: IoLogoFigma }
	];

	const backEndSkillsList = [
		{ name: 'Python', icon: SiPython },
		{ name: 'Django', icon: SiDjango },
		{ name: 'Django REST Framework', icon: SiDjango },
		{ name: 'Flask', icon: SiFlask },
		{ name: 'MySQL', icon: SiMysql },
		{ name: 'PostgreSQL', icon: BiLogoPostgresql },
		{ name: 'Redis', icon: DiRedis },
		{ name: 'API Development', icon: GiServerRack }
	];
	
	const devOpsList = [
		{ name: 'CI/CD', icon: SiGithubactions },
		{ name: 'Docker', icon: IoLogoDocker },
		{ name : 'Kubernetes', icon: SiKubernetes},
		{ name: 'AWS', icon: FaAws },
		{ name: 'Git', icon: FaGitAlt },
		{ name: 'Linux', icon: FcLinux },
		{ name: 'Render', icon: SiRender },
		{ name: 'Heroku', icon: GrHeroku },
		{ name: 'Vercel', icon: SiVercel },
		{ name: 'Netlify', icon: SiNetlify }
	];

	const securityList = [
		{ name: 'Kali Linux', icon: SiKalilinux },
		{ name: 'Burp Suite', icon: SiBurpsuite },
		{ name: 'Snyk', icon: SiSnyk },
		{ name: 'SonarQube', icon: SiSonarqube }
	];
	
	const renderSkills = (skillsList) => {
		return skillsList.map((skill, index) => (
			<button key={index} className='bg-violet-500 text-white border rounded m-2 p-2 hover:cursor-pointer flex items-center'>
				{skill.icon && (
					<skill.icon
						className={
							`
								mr-2 
								${skill.rotate ? 'rotate' : ''} 
								${skill.name === 'Kali Linux' ? 'text-black text-4xl' : ''}
								${skill.name === 'Redis' ? 'text-4xl' : ''}
							`
						} 
					/>
				)}
				<span>{skill.name}</span>
			</button>
		));
	};

	return (
		<AnimatedPage>
			<div className=''>
				<div className="">
					<div className="p-2 grid md:flex justify-between items-center">
						{/* <div className="div-gif">
							<img src="https://gad-ongoro.github.io/personal-portfolio/JavaScript%20frameworks.gif" alt="Hello World!" className='md:hidden'></img>
							<img src="DP-removebg-preview.png" alt="NA" className='hidden md:block' />
						</div> */}

						<div className='m-2'>
							<code className='m-2 text-gray-950'>
								👋 I'm Gad, a full-stack software developer skilled in designing, developing, and deploying robust applications. I specialize in creating immersive user experiences with JavaScript, Dart, React, and Flutter. My focus is on optimizing performance, ensuring cross-platform compatibility, and integrating with back-end systems for seamless user interactions.
								On the backend, I excel in Python frameworks like Django, Django REST Framework, and Flask. I design scalable APIs, manage databases with PostgreSQL and MySQL, and ensure efficient backend services. I'm proficient in Git, cloud deployment (AWS), containerization (Docker), orchestration (Kubernetes), and CI/CD pipelines, all while maintaining clean, scalable code.
							</code>
						</div>

					</div>
				</div>

				<div className='skills_container'>
					<div className="expertise container" id="expertise">
						<div className="front-end m-3">
							<h3>
								<code className=''>Front-End Development</code>
							</h3>
							<div>
								<div className='container d-flex flex-wrap'>
									{renderSkills(frontEndSkillsList)}
								</div>
							</div>
						</div>

						<div className="back-end m-3">
							<h3>
								<code>Back-End Development</code>
							</h3>
							<div>
								<div className='container d-flex flex-wrap'>
									{renderSkills(backEndSkillsList)}								
								</div>
							</div>
						</div>

						<div className="dev-ops m-3">
							<h3>
								<code className=''>Dev-Ops</code>
							</h3>
							<div>
								<div className='container d-flex flex-wrap'>
									{renderSkills(devOpsList)}
								</div>
							</div>
						</div>

						<div className="security m-3">
							<h3>
								<code className=''>Security</code>
							</h3>
							<div>
								<div className='container d-flex flex-wrap'>
									{renderSkills(securityList)}
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
			<Footer></Footer>
		</AnimatedPage>
	)
}

export default Home;