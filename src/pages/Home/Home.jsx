import React, { useRef, useEffect } from 'react';
import { HomePageTitle } from '../../components/HomePageTitle/HomePageTitle'
import Parallax from 'parallax-js';

import './Home.scss';

//Component Dependencies
import ParallaxLayer from '../../components/ParallaxLayer/ParallaxLayer';
import { ScrollIndicator } from '../../components/ScrollIndicator/ScrollIndicator';

const Home = () => {
	const scene = useRef(null);

	useEffect(() => {
		new Parallax(scene.current);
	}, []);

	return (
		<div id="home" name="home" ref={scene} >
			<ParallaxLayer depth="0.05" id="back-layer" />
			<ParallaxLayer depth="0.15" id="front-layer" />
			<ParallaxLayer depth="0" id="dot-layer" />
			<ParallaxLayer depth="0" id="overlay-layer" />
			<ParallaxLayer depth="0.25" id="top-info">
				<HomePageTitle />
			</ParallaxLayer>
			<ParallaxLayer depth="0.25" id="scroll-layer">
				<ScrollIndicator />
			</ParallaxLayer>
		</div>
	);
};

export default Home;