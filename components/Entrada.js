import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatearFecha } from '../helpers';
import styles from '../styles/Entrada.module.css';

const Entrada = ({ entrada }) => {
	const { titulo, imagen, resumen, published_at, url } = entrada;
	// console.log(imagen);
	return (
		<article>
			<div className={styles.divImagen}>
				<Image
					priority='true'
					layout='responsive'
					width={800}
					height={600}
					src={imagen.url}
					className={styles.imagen}
					alt={`Imagen ${titulo}`}
				/>
			</div>
			<div className={styles.contenido}>
				<h3>{titulo}</h3>
				<small className={styles.fecha}>{formatearFecha(published_at)}</small>
				<p className={styles.resumen}>{resumen}</p>
				<Link href={`/blog/${url}`}>
					<a className={styles.enlace}>Leer Artículo</a>
				</Link>
			</div>
		</article>
	);
};

export default Entrada;
