import React from 'react';
import Layout from '../../components/Layout';
import Image from 'next/image';
import { formatearFecha } from '../../helpers';
import styles from '../../styles/Entrada.module.css';

const EntradaBlog = ({ entrada }) => {
	const { contenido, imagen, published_at, titulo } = entrada;
	console.log(entrada);
	return (
		<Layout pagina={titulo}>
			<main className='contenedor'>
				<h1 className='heading'>{titulo}</h1>
				<article className={styles.entrada}>
					<div className={styles.divImagen}>
						<Image
							priority='true'
							layout='responsive'
							width={600}
							height={400}
							src={imagen.url}
							className={styles.imagen}
							alt={`${titulo}`}
						/>
					</div>
					<div className={styles.contenido}>
						<p className={styles.fecha}>{formatearFecha(published_at)}</p>
						<p className={styles.texto}>{contenido}</p>
					</div>
				</article>
			</main>
		</Layout>
	);
};

// getStaticPaths va a identificar todas las entradas
export async function getStaticPaths() {
	const urlBlog = `${process.env.API_URL}/blogs`;
	const respuesta = await fetch(urlBlog);
	const entradas = await respuesta.json();

	const paths = entradas.map((entrada) => ({
		params: { url: entrada.url },
	}));
	console.log(paths);

	return { paths, fallback: false };
}

// getStaticProps va a identificar la entrada seleccionada
export async function getStaticProps({ params: { url } }) {
	const urlBlog = `${process.env.API_URL}/blogs?url=${url}`;
	const respuesta = await fetch(urlBlog);
	const entrada = await respuesta.json();
	console.log(entrada);
	return {
		props: {
			entrada: entrada[0],
		},
	};
}

// export async function getServerSideProps({ query: { id } }) {
// 	const url = `${process.env.API_URL}/blogs/${id}`;
// 	const respuesta = await fetch(url);
// 	const entrada = await respuesta.json();
// 	console.log(entrada);
// 	return {
// 		props: {
// 			entrada,
// 		},
// 	};
// }

export default EntradaBlog;
