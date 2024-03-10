import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './media_screens.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header></Header>
				<Main></Main>
				<Footer></Footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
