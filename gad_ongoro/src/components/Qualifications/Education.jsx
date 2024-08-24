import React from 'react';
import AnimatedPage from '../AnimatedPage';

const educationData = [
  {
    school: 'Moringa School',
    degree: 'Software Engineering Certification',
    year: '2024',
    description: 'Gained hands-on experience in full-stack development with a focus on modern technologies.',
  },
  {
    school: 'Technical University of Mombasa',
    degree: 'Certification in Rapid Tech Skills',
    year: '2024',
    description: 'Focused on rapid learning of emerging tech trends and skill acquisition.',
  },
];

function Education() {
  return (
    <AnimatedPage>
      <div className="container mx-auto py-10">
        {educationData.map((education, index) => (
          <div key={index} className="grid grid-cols-12 my-8">
            {index % 2 === 0 ? (
              <>
                <div className="col-span-5 text-right">
                  <h2 className="text-2xl font-semibold text-violet-700">{education.school}</h2>
                  <p className="text-lg font-medium">{education.degree}</p>
                  <p className="text-gray-600">{education.year}</p>
                  <p className="text-gray-500 mt-2">{education.description}</p>
                </div>
                <div className="col-span-1 flex flex-col items-center">
                  <span className="w-4 h-4 rounded-full bg-violet-700"></span>
                  <span className="w-1 h-full bg-violet-700"></span>
                </div>
                <div className="col-span-5"></div>
              </>
            ) : (
              <>
                <div className="col-span-5"></div>
                <div className="col-span-1 flex flex-col items-center">
                  <span className="w-4 h-4 rounded-full bg-violet-700"></span>
                  <span className="w-1 h-full bg-violet-700"></span>
                </div>
                <div className="col-span-5 text-left">
                  <h2 className="text-2xl font-semibold text-violet-700">{education.school}</h2>
                  <p className="text-lg font-medium">{education.degree}</p>
                  <p className="text-gray-600">{education.year}</p>
                  <p className="text-gray-500 mt-2">{education.description}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </AnimatedPage>
  );
}

export default Education;