import React, { useState } from 'react';

//Component Dependencies
import NavBar from './components/NavBar/NavBar';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Projects from './pages/Projects/Projects';

const App = () => {
	const [theme, setTheme] = useState();

	return (
		<div
			style={{
				backgroundColor: theme ? theme.primary ? theme.primary : "#2c2a2d" : "#2c2a2d",
				transition: "all .5s ease",
				WebkitTransition: "all .5s ease",
				MozTransition: "all .5s ease"
			}}
		>
			{/* <NavBar /> */}
			<Home />
			<Projects onThemeChanged={(t) => setTheme(t)} />
			<Contact />
		</div>
	);
}

export default App;
