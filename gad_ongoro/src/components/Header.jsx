import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { ProfileContext } from '../components/Main';

function Header() {
	const {open, setOpen} = useContext(ProfileContext);
	function scrollUp(){
		window.scrollTo(0, 0);
	}

	return (
		<header className='p-3 mb-3'>
			<div className="header flex justify-between items-center z-10">

				<div className="dp-name-div">				
					<div className="name-div">
						<h4> <NavLink to={"/"}> Gad Ongoro </NavLink> </h4>
					</div>
				</div>

				<div className="nav-div hidden md:block">
					<ul>
						<li> <NavLink className={'text-lg'} to={"/"} onClick={scrollUp}> Home </NavLink> </li>
						<li> <a className={'text-lg'} href="/#expertise"> Expertise </a> </li>
						<li> <NavLink className={'text-lg'} to={'/projects'} onClick={scrollUp}>Projects</NavLink></li>
						<li> <a className={'text-lg'} href="/#work"> Work </a> </li>
						<li> <NavLink className={'text-lg'} to={'/contact'} onClick={scrollUp}>Contact</NavLink> </li>
						<li> 
							{/* <a className={'text-lg'} href="Gad_Ongoro_Resume.pdf" download={'Gad_Ongoro_Resume.pdf'}>Resume</a> */}
							<a className={'text-lg'} href="/Gad_Ongoro_Resume.pdf" target='_blank'>Resume</a>
						</li>
					</ul>
				</div>

				{!open && <RxHamburgerMenu className='cursor-pointer z-auto md:hidden' onClick={() => setOpen(!open)} />}

			</div>
		</header>
	)
};

export default Header;