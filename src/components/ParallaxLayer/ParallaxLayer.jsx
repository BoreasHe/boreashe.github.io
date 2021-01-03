import React from 'react';
import './ParallaxLayer.scss';

export const ParallaxLayer = ({ depth, id, children, ...others }) => {
	return (
		<div
			data-depth={depth}
			id={id}
			className="parallax-layer"
		>
			{children}
		</div>
	);
};

export default ParallaxLayer;