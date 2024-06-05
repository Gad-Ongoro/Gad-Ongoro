import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './media_screens.css';
import Main from './components/Main';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Main></Main>
			</div>
		</BrowserRouter>
	);
}

export default App;
