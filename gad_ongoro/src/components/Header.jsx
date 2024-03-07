import React from 'react';

function Header() {
	return (
		<header>
			<div className="header">

				<div className="dp-name-div">
					<div className="dp-div">
						<a href="/">
							<img className='dp_img' src="https://gad-ongoro.github.io/personal-portfolio/DP3.jpg" alt='NA'></img>
						</a>
					</div>
				
					<div className="name-div">
						<h2> <a href="/">Gad Ongoro </a> </h2>
					</div>
				</div>

				<div className="nav-div">
					<ul>
						<li> <a href="/"> Home </a> </li>
						<li> <a href="#about"> About </a> </li>
						<li> <a href="#expertise"> Expertise </a> </li>
						<li> <a href="#projects"> Projects </a> </li>
						<li> <a href="#work"> Work </a> </li>
						<li> <a href="#contact"> Contact </a> </li>
					</ul>
				</div>

			</div>
		</header>
	)
};

export default Header;