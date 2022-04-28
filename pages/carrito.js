import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import CarritoProductos from '../components/CarritoProductos';
import styles from '../styles/Carrito.module.css';

const Carrito = ({ carrito, actualizarCantidadCarrito, eliminarProductoCarrito }) => {
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const calculoTotal = carrito.reduce((total, producto) => total + producto.cantidad * producto.precio, 0);

		setTotal(calculoTotal);
	}, [carrito]);

	return (
		<Layout pagina={'Carrito de Compras'}>
			<h1 className='heading'>Carrito de Compras</h1>
			<main className={`${styles.contenido} contenedor`}>
				<div className={styles.carrito}>
					<h3 className={styles.articulos}>Productos</h3>
					{carrito.length === 0 ? (
						<h3 className={styles.noHay}>Carrito Vacío</h3>
					) : (
						<>
							{/* <h3 className={styles.articulos}>Artículos</h3> */}
							<CarritoProductos
								carrito={carrito}
								actualizarCantidadCarrito={actualizarCantidadCarrito}
								eliminarProductoCarrito={eliminarProductoCarrito}
							/>
						</>
					)}
				</div>
				<div className={styles.resumen}>
					{total > 0 ? (
						<>
							<h3>Resumen del Pedido</h3>
							<p>Total a pagar: ${total}</p>
						</>
					) : (
						<h3 className={styles.noHay}>No hay Productos en el Carrito</h3>
					)}
				</div>
			</main>
		</Layout>
	);
};

export default Carrito;
