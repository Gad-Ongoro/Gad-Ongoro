import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
	return (
		<header>
			<div className="header">

				<div className="dp-name-div">				
					<div className="name-div">
						<h4> <NavLink to={"/"}>Gad Ongoro </NavLink> </h4>
					</div>
				</div>

				<div className="nav-div">
					<ul>
						<li> <NavLink to={"/"}> Home </NavLink> </li>
						<li> <a href="/#expertise"> Expertise </a> </li>
						<li> <NavLink to={'/projects'}>Projects</NavLink></li>
						<li> <a href="/#work"> Work </a> </li>
						<li> <a href="/#contact"> Contact </a> </li>
						<li> <NavLink to={'/resume'}>Resume</NavLink></li>
					</ul>
				</div>

			</div>
		</header>
	)
};

export default Header;