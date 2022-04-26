import React from 'react';
import Guitarra from './Guitarra';

const Guitarras = ({ guitarras }) => {
	console.log(guitarras);
	return (
		<div>
			{guitarras.map((guitarra) => (
				<Guitarra key={guitarra.id} guitarra={guitarra} />
			))}
		</div>
	);
};

export default Guitarras;
