'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import AnimatedPage from '@/app/Components/AnimatedPage';

const educationData = [
  {
    school: 'United States International University (USIU)',
    degree: 'Ethical Hacker Certification',
    year: '2024-2025',
    description: 'Gained hands-on experience in cybersecurity principles, ethical hacking methodologies, penetration testing, vulnerability assessment, and network security.',
    image: '/CEH.png',
  },
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
  }
];

function Education() {
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
    <AnimatedPage>
      <div className="container mx-auto py-10 backdrop-blur-[0.5px]">
        {educationData.map((education, index) => (
          <div key={index} className="grid grid-cols-12 my-8">
            {index % 2 === 0 ? (
              <>
                <div className="col-span-12 md:col-span-5 text-left md:text-right">
                  <h2 className="text-2xl font-semibold text-violet-700">{education.school}</h2>
                  <p className="text-lg text-gray-900 font-medium">{education.degree}</p>
                  <p className="text-gray-600">{education.year}</p>
                  <p className="text-gray-500 mt-2">{education.description}</p>
                </div>
                <div className="hidden md:flex col-span-1 flex-col items-center">
                  <span className="w-4 h-4 rounded-full bg-violet-700"></span>
                  <span className="w-1 h-full bg-violet-700"></span>
                </div>
                <div className="col-span-12 md:col-span-5 flex justify-start">
                  <Image 
                    width={600} 
                    height={600} 
                    src={education.image} 
                    alt={education.degree} 
                    className="md:w-1/2 transition duration-500 ease-in-out hover:scale-105 cursor-pointer" 
                    onClick={() => openModal(education.image)}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="hidden col-span-5 md:flex justify-end">
                  <Image 
                    width={600} 
                    height={600} 
                    src={education.image} 
                    alt={education.degree} 
                    className="md:w-1/2 transition duration-500 ease-in-out hover:scale-105 float-right cursor-pointer" 
                    onClick={() => openModal(education.image)}
                  />
                </div>
                <div className="hidden md:flex col-span-1 flex-col items-center">
                  <span className="w-4 h-4 rounded-full bg-violet-700"></span>
                  <span className="w-1 h-full bg-violet-700"></span>
                </div>
                <div className="col-span-12 md:col-span-5 text-left">
                  <h2 className="text-2xl font-semibold text-violet-700">{education.school}</h2>
                  <p className="text-lg text-gray-900 font-medium">{education.degree}</p>
                  <p className="text-gray-600">{education.year}</p>
                  <p className="text-gray-500 mt-2">{education.description}</p>
                </div>
                <div className="md:hidden col-span-12 flex justify-end">
                  <Image 
                    width={500} 
                    height={500} 
                    src={education.image} 
                    alt={education.degree} 
                    className="md:w-1/2 transition duration-500 ease-in-out hover:scale-105 cursor-pointer" 
                    onClick={() => openModal(education.image)}
                  />
                </div>
              </>
            )}
          </div>
        ))}

        {modalOpen && (
          <div className="hidden md:fixed inset-0 bg-black bg-opacity-50 md:flex justify-center items-center z-50" onClick={closeModal}>
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
    </AnimatedPage>
  );
}

export default Education;