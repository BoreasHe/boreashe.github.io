import React from 'react';

//Component Dependencies
import NavBar from './components/NavBar/NavBar';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Projects from './pages/Projects/Projects';

const App = () => {
	return (
		<>
			<NavBar />
			<Home />
			<Projects />
			<Contact />
		</>
	);
}

export default App;
