import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Guitarras from '../components/Guitarras';
import Curso from '../components/Curso';
import ListadoBlog from '../components/ListadoBlog';
import { getRandomInt } from '../helpers';

export default function Home({ guitarras, curso, entradas }) {
	const [mostrarGuitarra, setMostrarGuitarra] = useState(0);

	useEffect(() => {
		setMostrarGuitarra(getRandomInt(0, 12));
	}, []);

	return (
		<div>
			<Layout pagina='Inicio' guitarra={guitarras[mostrarGuitarra]}>
				<main className='contenedor'>
					<h1 className='heading'>Nuestra Colección</h1>
					<Guitarras guitarras={guitarras} />
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
	const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=precio:asc`;
	const urlCursos = `${process.env.API_URL}/cursos`;
	const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=createdAt:desc`;

	const [respGuitarras, respCursos, respBlog] = await Promise.all([
		fetch(urlGuitarras),
		fetch(urlCursos),
		fetch(urlBlog),
	]);

	const [guitarras, curso, entradas] = await Promise.all([respGuitarras.json(), respCursos.json(), respBlog.json()]);

	return {
		props: {
			guitarras,
			curso,
			entradas,
		},
	};
}
