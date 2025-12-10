'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useMobile } from '@/hooks/use-mobile';

const educationData = [
	{
		school: 'Moringa School',
		degree: 'Software Engineering Certification',
		year: '2024',
		description: 'Gained hands-on experience in full-stack development with a focus on modern technologies.',
		image: '/Moringa_SE_Cert.png',
	},
	{
		school: 'Technical University of Mombasa',
		degree: 'Certification in Rapid Tech Skills (KIEP-SKIES)',
		year: '2024',
		description: 'Focused on rapid learning of emerging tech trends and skill acquisition.',
		image: '/tum.png',
	},
	{
		school: 'United States International University (USIU)',
		degree: 'Ethical Hacker Certification',
		year: '2024-2025',
		description: 'Gained hands-on experience in cybersecurity principles, ethical hacking methodologies, penetration testing, vulnerability assessment, and network security.',
		image: '/CEH.png',
	},
];

function Education() {
	const isMobile = useMobile();
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState('');

	const openModal = (image: string) => {
		setSelectedImage(image);
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
		setSelectedImage('');
	};

	return (
		<div className={`space-y-12 max-w-6xl mx-auto px-4 py-12 relative ${
			!isMobile ? 
				"before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0" 
				: ""
		}`}>
			{educationData.map((education, index) => (
				<div
					key={index}
					className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
				>
					{/* Education Content */}
					<motion.div
						className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
						initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: false, amount: 0.25 }}
					>
						<div className="relative overflow-hidden rounded-xl bg-white dark:bg-zinc-800 backdrop-blur-sm border border-zinc-300 dark:border-zinc-700/50 p-6 transition-all duration-300 hover:border-violet-500/50">
							<div className="absolute -inset-1 bg-gradient-to-r from-violet-500/10 to-pink-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

							<div className="relative">
								<h3 className="text-xl font-bold text-violet-700 dark:text-violet-400">{education.school}</h3>
								<div className="text-zinc-700 dark:text-zinc-100 mb-4">
									{education.degree} | {education.year}
								</div>
								<p className="text-zinc-600 dark:text-zinc-300">{education.description}</p>
							</div>
						</div>
					</motion.div>

					{/* Image on the opposite side */}
					<motion.div
						className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-10" : "md:pl-10"}`}
						initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: false, amount: 0.25 }}
					>
						<Image 
							width={600} 
							height={600} 
							src={education.image} 
							alt={education.degree} 
							className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 transition duration-500 ease-in-out hover:scale-105 cursor-pointer" 
							onClick={() => openModal(education.image)}
						/>
					</motion.div>

					{/* Timeline dot (for desktop) */}
					{!isMobile && (
						<div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
							<motion.div
								className="w-6 h-6 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 z-10 flex items-center justify-center"
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{ duration: 0.3 }}
								viewport={{ once: true }}
							>
								<div className="w-2 h-2 rounded-full bg-white"></div>
							</motion.div>
						</div>
					)}
				</div>
			))}

			{/* Modal */}
			{modalOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={closeModal}>
					<div className="bg-white p-4 rounded-lg max-w-3xl max-h-full overflow-auto">
						<Image 
							width={800} 
							height={800} 
							src={selectedImage} 
							alt="Certificate" 
							className="w-full h-auto" 
						/>
					</div>
				</div>
			)}
		</div>
	);
}

export default Education;