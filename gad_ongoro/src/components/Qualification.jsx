import React from 'react';
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

				<div className='p-1 flex justify-center items-center gap-5'>
					<div className='flex justify-center items-center'>
						<FaUserGraduate className='text-violet-700' />
						<p>Education</p>
					</div>
					<div className='flex justify-center items-center'>
						<MdWork className='text-violet-700' />
						<p>Work</p>
					</div>
				</div>

				<div>

				</div>
			</div>
    </div>
		</AnimatedPage>
  )
};

export default Qualification;