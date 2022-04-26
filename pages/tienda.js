import React from 'react';
import Layout from '../components/Layout';
import Guitarras from '../components/Guitarras';

const Tienda = ({ guitarras }) => {
	return (
		<div>
			<Layout pagina='Tienda'>
				<div className='contenedor'>
					<h1 className='heading'>Nuestros Productos</h1>
					<Guitarras guitarras={guitarras} />
				</div>
			</Layout>
		</div>
	);
};

export async function getServerSideProps() {
	const urlGuitarras = `${process.env.API_URL}/guitarras`;
	const respuesta = await fetch(urlGuitarras);
	const guitarras = await respuesta.json();

	return {
		props: {
			guitarras,
		},
	};
}

export default Tienda;
