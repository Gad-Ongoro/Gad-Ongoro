import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';

function Main() {

	return (
		<div className=''>
			<div className="main">
				<Routes>
					<Route path='/' element={<Home></Home>}></Route>
					<Route path='/home' element={<Home></Home>}></Route>
					<Route path='/projects/*' element={<Projects></Projects>}></Route>
				</Routes>

				<div className="work" id="work"></div>
			</div>
		</div>
	)
};

export default Main;