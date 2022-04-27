import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Guitarra.module.css';

const Guitarra = ({ guitarra }) => {
	const { nombre, precio, url, imagen, descripcion } = guitarra;
	return (
		<div className={styles.guitarra}>
			<Image
				priority='true'
				layout='responsive'
				width={150}
				height={350}
				src={imagen.url}
				alt={`${nombre}`}
				className={styles.imagen}
			/>
			<div className={styles.contenido}>
				<h2>{nombre}</h2>
				<p className={styles.descripcion}>{descripcion}</p>
				<p className={styles.precio}>${precio}</p>
				<Link href={`/guitarras/${url}`}>Ver Producto </Link>
			</div>
		</div>
	);
};

export default Guitarra;
