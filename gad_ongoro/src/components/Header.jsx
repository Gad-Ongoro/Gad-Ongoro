import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
	return (
		<header>
			<div className="header">

				<div className="dp-name-div">				
					<div className="name-div">
						<h4> <a href="/">Gad Ongoro </a> </h4>
					</div>
				</div>

				<div className="nav-div">
					<ul>
						<li> <a href="/"> Home </a> </li>
						<li> <a href="/#about"> About </a> </li>
						<li> <a href="/#expertise"> Expertise </a> </li>
						<li> <NavLink to={'/projects'}>Projects</NavLink></li>
						<li> <a href="/#work"> Work </a> </li>
						<li> <a href="/#contact"> Contact </a> </li>
					</ul>
				</div>

			</div>
		</header>
	)
};

export default Header;