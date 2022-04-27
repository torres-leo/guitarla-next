import React, { useState } from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout';
import Error from '../../components/Error';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/Guitarra.module.css';

const Producto = ({ guitarra, agregarCarrito }) => {
	const [cantidad, setCantidad] = useState(1);
	const [mensaje, setMensaje] = useState('');
	const { id, descripcion, nombre, precio, imagen } = guitarra[0];

	const handleSubmit = (e) => {
		e.preventDefault();

		// Agregar al carrito
		if (cantidad < 1) {
			setMensaje('Cantidad No Valida');

			setTimeout(() => {
				setMensaje('');
			}, 4000);
			return;
		}

		// Agregando al carrito
		const guitarraSeleccionada = {
			id,
			imagen: imagen.url,
			nombre,
			precio,
			cantidad,
		};

		agregarCarrito(guitarraSeleccionada);
	};

	return (
		<Layout pagina={`Guitarra ${nombre}`}>
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

					<form action='' className={styles.formulario} onSubmit={handleSubmit}>
						<div className={styles.cantidad}>
							<label>Agregar cantidad</label>
							<select value={cantidad} onChange={(e) => setCantidad(parseInt(e.target.value))}>
								<option value='0'>-- Selecciona --</option>
								<option value='1'>1</option>
								<option value='2'>2</option>
								<option value='3'>3</option>
								<option value='4'>4</option>
								<option value='5'>5</option>
							</select>
						</div>

						{mensaje && (
							<Error>
								<FontAwesomeIcon className='faCircleExclamation' icon={faCircleExclamation} size='2x' />
								{mensaje}
							</Error>
						)}

						<input type='submit' value='Agregar al carrito' />
					</form>
					{/* Fin del Formulario */}
				</div>
			</div>
		</Layout>
	);
};

export async function getServerSideProps({ query: { url } }) {
	const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`;
	const respuesta = await fetch(urlGuitarra);
	const guitarra = await respuesta.json();

	return {
		props: {
			guitarra,
		},
	};
}

export default Producto;
