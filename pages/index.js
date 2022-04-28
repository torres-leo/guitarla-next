import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import Guitarras from '../components/Guitarras';
import Curso from '../components/Curso';
import ListadoBlog from '../components/ListadoBlog';
import { getRandomInt } from '../helpers';
import styles from '../styles/Guitarras.module.css';

export default function Home({ guitarras, curso, entradas, guitarrasHeader }) {
	const [mostrarGuitarra, setMostrarGuitarra] = useState(0);

	useEffect(() => {
		setMostrarGuitarra(getRandomInt(0, 12));
	}, []);

	return (
		<div>
			<Layout pagina='Inicio' guitarra={guitarrasHeader[mostrarGuitarra]}>
				<main className='contenedor'>
					<h1 className='heading'>Nuestra Colección</h1>
					<Guitarras guitarras={guitarras} />
					<div className={styles.enlace}>
						<Link href='/tienda'>
							<a>Ver Más</a>
						</Link>
					</div>
				</main>
				<Curso curso={curso} />
				<section className='contenedor'>
					<ListadoBlog entradas={entradas} />
				</section>
			</Layout>
		</div>
	);
}

export async function getServerSideProps() {
	const urlGuitarrasHeader = `${process.env.API_URL}/guitarras`;
	const urlGuitarras = `${process.env.API_URL}/guitarras?_limit=6&_sort=precio:asc`;
	const urlCursos = `${process.env.API_URL}/cursos`;
	const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=createdAt:desc`;

	const [respGuitarras, respGuitarrasHeader, respCursos, respBlog] = await Promise.all([
		fetch(urlGuitarras),
		fetch(urlGuitarrasHeader),
		fetch(urlCursos),
		fetch(urlBlog),
	]);

	const [guitarras, guitarrasHeader, curso, entradas] = await Promise.all([
		respGuitarras.json(),
		respGuitarrasHeader.json(),
		respCursos.json(),
		respBlog.json(),
	]);

	return {
		props: {
			guitarras,
			guitarrasHeader,
			curso,
			entradas,
		},
	};
}
