import React from 'react';
import Image from 'next/image';
import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { FaReact, FaBootstrap, FaNode, FaAws, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiMui, SiDart, SiFlutter, SiPython, SiDjango, SiFastapi } from "react-icons/si";
import { RiTailwindCssFill, RiSupabaseFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { GiServerRack } from "react-icons/gi";
import { GrGraphQl, GrHeroku } from "react-icons/gr";
import { SiGithubactions } from "react-icons/si";
import { IoLogoDocker } from "react-icons/io5";
import { SiKubernetes } from "react-icons/si";
import { SiTerraform } from "react-icons/si";
import { SiAnsible } from "react-icons/si";
import { SiGooglecloud } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { SiRender } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { SiKalilinux } from "react-icons/si";
import { SiBurpsuite } from "react-icons/si";
import { SiSnyk } from "react-icons/si";
import { SiSonarqube } from "react-icons/si";
import { IconType } from 'react-icons';
import AnimatedYPage from '@/components/animations/AnimatedYPage';
import WavingHand from '@/components/animations/WavingHand';

function Home() {
  const backEndSkillsList = [
		{ name: 'Python', icon: SiPython },
		{ name: 'Django', icon: SiDjango },
		{ name: 'Django REST Framework', icon: SiDjango },
		{ name: 'FastAPI', icon: SiFastapi },
    { name: 'Node.js', icon: FaNode },
    { name: 'Express.js', icon: SiExpress },
		{ name: 'MySQL', icon: SiMysql },
		{ name: 'PostgreSQL', icon: BiLogoPostgresql },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Firebase', icon: SiFirebase },
    { name: 'Supabase', icon: RiSupabaseFill },
		{ name: 'Redis', icon: DiRedis },
		{ name: 'API Development', icon: GiServerRack },
    { name: 'GraphQL', icon: GrGraphQl },
	];

	const frontEndSkillsList = [
		{ name: 'JavaScript', icon: TbBrandJavascript },
    { name: 'TypeScript', icon: BiLogoTypescript },
		{ name: 'React JS', icon: FaReact, rotate: true },
		{ name: 'Next.js', icon: SiNextdotjs },
		{ name: 'Material UI', icon: SiMui },
		{ name: 'Dart', icon: SiDart },
		{ name: 'Flutter', icon: SiFlutter },
		{ name: 'Tailwind CSS', icon: RiTailwindCssFill },
		{ name: 'Bootstrap V', icon: FaBootstrap },
	];
	
	const devOpsList = [
		{ name: 'CI/CD', icon: SiGithubactions },
		{ name: 'Docker', icon: IoLogoDocker },
		{ name : 'Kubernetes', icon: SiKubernetes},
    { name: 'Terraform', icon: SiTerraform },
    { name: 'Ansible', icon: SiAnsible },
    { name: 'GCP', icon: SiGooglecloud },
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
	
	const renderSkills = (skillsList: { name: string; icon: IconType; rotate?: boolean }[]) => {
		return skillsList.map((skill, index) => (
			<button key={index} className='bg-violet-500 text-white border rounded m-2 p-2 hover:cursor-pointer flex items-center'>
				{skill.icon && (
					<skill.icon
						className={
							`
								mr-2 
								${skill.rotate ? 'rotate' : ''} 
								${skill.name === 'Kali Linux' ? 'text-black text-4xl' : ''}
                ${skill.name === 'MongoDB' ? 'text-green-400 text-2xl' : ''}
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
		<>
      <AnimatedYPage>
        {/* About Section */}
        <section className="p-2 grid md:flex justify-between items-center">
          {/* DP */}
          {/* Background Image Container */}
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="w-[350px] h-[350px] md:w-[550px] md:h-[550px] opacity-20">
              <Image
                width={500}
                height={500}
                src="/DP-removebg-preview.png" 
                alt="Profile" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <code className="m-2 text-gray-950 text-2xl leading-relaxed">
            <WavingHand /> <span className="bg-yellow-200 px-1 rotate-[-1deg] inline-block">I&apos;m Gad</span>, a{" "}
            <span className="bg-green-200 px-1 rotate-[1deg] inline-block">full-stack software developer</span> skilled in
            designing, developing, and deploying robust applications. I specialize in creating immersive user experiences
            with <span className="bg-blue-200 px-1 rotate-[-0.5deg] inline-block">React</span>, {" "}
            <span className="bg-blue-200 px-1 rotate-[-0.5deg] inline-block"> Next.JS</span>, and {" "}
            <span className="bg-blue-200 px-1 rotate-[-0.5deg] inline-block">Flutter</span>. My
            focus is on optimizing performance, ensuring cross-platform compatibility, and integrating with back-end systems
            for seamless user interactions. <br /> <br /> 
            On the <span className="bg-fuchsia-200 px-1 rotate-[-1deg] inline-block">backend</span>, I excel in{" "}
            <span className="bg-sky-300 px-1 rotate-[0.5deg] inline-block">Python</span> and {" "}
            <span className="bg-emerald-300 px-1 rotate-[-0.5deg] inline-block">Node.js</span> frameworks like{" "}
            <span className="bg-sky-200 px-1 rotate-[-1deg] inline-block">
              Django
            </span>, {" "}
            <span className="bg-sky-200 px-1 rotate-[1deg] inline-block">
            Django REST Framework
            </span>, {" "}
            <span className="bg-pink-200 px-1 rotate-[-0.5deg] inline-block">
              FastAPI
            </span>, and {" "}
            <span className="bg-emerald-300 px-1 rotate-[-0.5deg] inline-block">
              Express.js
            </span>
            . I design and develop secure and scalable APIs, manage databases with {" "}
            <span className="bg-indigo-200 px-1 rotate-[0.5deg] inline-block">
              PostgreSQL
            </span>,{" "}
            <span className="bg-indigo-200 px-1 rotate-[0.5deg] inline-block">
              MySQL
            </span>
            {" "} and{" "}
            <span className="bg-green-200 px-1 rotate-[1deg] inline-block">
              MongoDB
            </span>, ensuring efficient, scalable, and secure backend services.
          </code>
        </section>

        {/* Skills Section */}
        <section>
          <div className="expertise" id="expertise">
            <div className="m-3">
              <h3>
                <code>Back-End Development</code>
              </h3>
              <div>
                <div className='flex flex-wrap'>
                  {renderSkills(backEndSkillsList)}
                </div>
              </div>
            </div>

            <div className="m-3">
              <h3>
                <code>Front-End Development</code>
              </h3>
              <div>
                <div className='flex flex-wrap'>
                  {renderSkills(frontEndSkillsList)}								
                </div>
              </div>
            </div>

            <div className="m-3">
              <h3>
                <code className=''>Dev-Ops</code>
              </h3>
              <div>
                <div className='flex flex-wrap'>
                  {renderSkills(devOpsList)}
                </div>
              </div>
            </div>

            <div className="m-3">
              <h3>
                <code className=''>Security</code>
              </h3>
              <div>
                <div className='flex flex-wrap'>
                  {renderSkills(securityList)}
                </div>
              </div>
            </div>

          </div>
        </section>
      </AnimatedYPage>
		</>
	)
}

export default Home;
