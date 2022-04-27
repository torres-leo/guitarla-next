import React from 'react';
import Layout from '../components/Layout';
import ListadoBlog from '../components/ListadoBlog';

const Blog = ({ entradas }) => {
	return (
		<div>
			<Layout pagina='Blog'>
				<main className='contenedor'>
					<ListadoBlog entradas={entradas} />
				</main>
			</Layout>
		</div>
	);
};

export async function getStaticProps() {
	const url = `${process.env.API_URL}/blogs?_sort=createdAt:asc`;
	console.log(url);
	const respuesta = await fetch(url);
	const entradas = await respuesta.json();

	return {
		props: {
			entradas,
		},
	};
}

export default Blog;
