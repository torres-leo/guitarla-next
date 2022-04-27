import { useState, useEffect } from 'react';
import '../styles/normalize.css';
import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
	const [carrito, setCarrito] = useState([]);

	const agregarCarrito = (producto) => {
		// Si el articulo ya existe en el carrito, solo modificamos su cantidad
		if (carrito.some((articulo) => articulo.id === producto.id)) {
			const carritoActualizado = carrito.map((item) => {
				if (item.id === producto.id) {
					item.cantidad = producto.cantidad;
				}
				return item;
			});
		} else {
			// console.log('Nuevo producto');
			setCarrito([...carrito, producto]);
		}
	};

	return <Component {...pageProps} carrito={carrito} agregarCarrito={agregarCarrito} />;
}

export default MyApp;
