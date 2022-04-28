import { useState, useEffect } from 'react';
import '../styles/normalize.css';
import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
	const [carrito, setCarrito] = useState([]);

	useEffect(() => {
		const carritoLS = JSON.parse(localStorage.getItem('carrito')) ?? [];

		if (carritoLS.length !== 0) {
			setCarrito(carritoLS);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('carrito', JSON.stringify(carrito));
	}, [carrito]);

	const agregarCarrito = (producto) => {
		// Si el articulo ya existe en el carrito, solo modificamos su cantidad
		if (carrito.some((articulo) => articulo._id === producto._id)) {
			const carritoActualizado = carrito.map((item) => {
				if (item._id === producto._id) {
					item.cantidad = producto.cantidad;
				}
				return item;
			});
			setCarrito(carritoActualizado);
		} else {
			// console.log('Nuevo producto');
			setCarrito([...carrito, producto]);
		}
	};

	const actualizarCantidadCarrito = (producto) => {
		const cantidadCarrito = carrito.map((item) => {
			if (item._id === producto._id) {
				item.cantidad = producto.cantidad;
			}
			return item;
		});
		setCarrito(cantidadCarrito);
	};

	const eliminarProductoCarrito = (id) => {
		const respuesta = confirm('¿Estás seguro que deseas eliminar este producto?');

		if (respuesta) {
			const carritoActualizado = carrito.filter((producto) => producto._id !== id);
			setCarrito(carritoActualizado);
		}
	};

	return (
		<Component
			{...pageProps}
			carrito={carrito}
			agregarCarrito={agregarCarrito}
			actualizarCantidadCarrito={actualizarCantidadCarrito}
			eliminarProductoCarrito={eliminarProductoCarrito}
		/>
	);
}

export default MyApp;
