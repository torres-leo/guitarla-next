import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Guitarra = ({ guitarra }) => {
	const { nombre, precio, url, imagen, descripcion } = guitarra;
	return (
		<div>
			<Image priority='true' layout='responsive' width={800} height={600} src={imagen.url} alt={`${nombre}`} />
			<h2>{nombre}</h2>
		</div>
	);
};

export default Guitarra;
