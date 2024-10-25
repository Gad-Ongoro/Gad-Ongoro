import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { ProfileContext } from './Main';

function Header() {
	const {open, setOpen} = useContext(ProfileContext);
	function scrollUp(){
		window.scrollTo(0, 0);
	}

	return (
		<header className='p-3 mb-3 bg-gray-100 sticky top-0 w-full backdrop-blur z-10'>
			<div className="header flex justify-between items-center z-10">

				<div>				
					<div className="">
						<h2 className='pacifico-regular text-2xl md:text-3xl'> <NavLink to={"/"} onClick={scrollUp}> Gad Ongoro </NavLink> </h2>
					</div>
				</div>

				<div className="nav-div hidden md:block mr-10">
					<ul className='flex justify-between items-center gap-x-8 lg:gap-x-16'>
						<li> <NavLink className={'text-lg'} to={"/"} onClick={scrollUp}> Home </NavLink> </li>
						<li> <NavLink className={'text-lg'} to={'/qualification/education'} onClick={scrollUp}>Qualification</NavLink> </li>
						<li> <NavLink className={'text-lg'} to={'/projects/gofoods'} onClick={scrollUp}>Projects</NavLink></li>
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