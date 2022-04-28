import React, { useState } from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout';
import Mensaje from '../../components/Mensaje';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation, faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/Guitarra.module.css';

const Producto = ({ guitarra, agregarCarrito }) => {
	const [cantidad, setCantidad] = useState(1);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');
	const { id, descripcion, nombre, precio, imagen } = guitarra[0];

	const mensajeError = () => {
		setError('Cantidad No Valida');

		setTimeout(() => {
			setError('');
		}, 4000);
	};

	const mensajeSuccess = () => {
		setSuccess('Producto agregado al Carrito');
		setTimeout(() => {
			setSuccess('');
		}, 4000);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Agregar al carrito
		if (cantidad < 1) {
			mensajeError();
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
		mensajeSuccess();
	};

	return (
		<Layout pagina={`Guitarra ${nombre}`}>
			<div className={styles.guitarra}>
				<div className={styles.divImagen}>
					<Image
						priority='true'
						layout='responsive'
						width={50}
						height={100}
						src={imagen.url}
						alt={`${nombre}`}
						className={styles.imagen}
					/>
				</div>

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

						{error &&
							(success ? (
								(setSuccess(''), () => mensajeError())
							) : (
								<Mensaje tipo='error'>
									<FontAwesomeIcon icon={faCircleExclamation} size='2x' />
									{error}
								</Mensaje>
							))}

						<input type='submit' value='Agregar al carrito' />
						<br />
					</form>

					{success &&
						(error ? (
							(setError(''), () => mensajeSuccess())
						) : (
							<Mensaje tipo='success'>
								<FontAwesomeIcon icon={faCheck} size='2x' />
								{success}
							</Mensaje>
						))}
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
