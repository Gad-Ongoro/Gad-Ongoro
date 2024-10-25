import {useState, createContext} from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from './Admin';
import Header from './Header';
import Home from './Home';
import Qualification from './Qualification';
import Projects from './Projects';
import Contact from './Contact';
import SlideOver from './SlideOver';
export const ProfileContext = createContext();

function Main() {
	const [open, setOpen] = useState(false);
	return (
		<div className=''>
			<div className="main">
				<ProfileContext.Provider value={{open, setOpen}}>
					<Header></Header>
					<Routes>
						<Route path='/' element={<Home></Home>}></Route>
						<Route path='/home' element={<Home></Home>}></Route>
						<Route path='/qualification/*' element={<Qualification></Qualification>}></Route>
						<Route path='/projects/*' element={<Projects></Projects>}></Route>
						<Route path='/contact' element={<Contact></Contact>}></Route>
						<Route path='/admin' element={<Admin></Admin>}></Route>
					</Routes>
					<SlideOver></SlideOver>

					<div className="work" id="work"></div>
				</ProfileContext.Provider>
			</div>
		</div>
	)
};

export default Main;