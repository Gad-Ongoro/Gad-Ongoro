import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Education from './Qualifications/Education';
import Work from './Qualifications/Work';
import AnimatedPage from './AnimatedPage';
import { FaUserGraduate } from "react-icons/fa";
import { MdWork } from "react-icons/md";

function Qualification() {
  return (
		<AnimatedPage>
			<div>
				<div className="">
					<div>
						<h3 className='m-1 text-gray-950 text-center font-medium text-2xl md:text-3xl'>
							Qualification
						</h3>
						<p className='text-gray-950 text-center'>My journey</p>
					</div>

					<div className=''>
						<div className='p-1 flex gap-x-48 justify-center items-center'>
							<div className='flex justify-center items-center'>
								<FaUserGraduate className='text-violet-700' />
								<NavLink to={'/qualification/education'}>Education</NavLink>
							</div>
							<div className='flex justify-center items-center'>
								<MdWork className='text-violet-700' />
								<NavLink to={'/qualification/work'}>Work</NavLink>
							</div>
						</div>
					</div>

					<Routes>
						<Route path='/' element={<Education></Education>}></Route>
						<Route path='/education' element={<Education></Education>}></Route>
						<Route path='/work' element={<Work></Work>}></Route>
					</Routes>

				</div>
			</div>
		</AnimatedPage>
  )
};

export default Qualification;