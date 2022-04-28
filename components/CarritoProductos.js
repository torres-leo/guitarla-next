import React from 'react';
import Image from 'next/image';
import styles from '../styles/Carrito.module.css';

const CarritoProductos = ({ carrito, actualizarCantidadCarrito, eliminarProductoCarrito }) => {
	return carrito.map((producto) => (
		<div key={producto._id} className={styles.producto}>
			<div>
				<Image layout='responsive' width={300} height={600} src={producto.imagen} alt='Producto' />
			</div>
			<div>
				<div className={styles.eliminarProducto}>
					<p className={styles.nombre}>{producto.nombre}</p>
					<button
						type='button'
						className={styles.eliminar}
						onClick={() => eliminarProductoCarrito(producto._id)}>
						X
					</button>
				</div>
				<div className={styles.cantidad}>
					<p>Cantidad seleccionada: {producto.cantidad}</p>
					<select
						value={producto.cantidad}
						className={styles.select}
						onChange={(e) =>
							actualizarCantidadCarrito({
								cantidad: e.target.value,
								id: producto._id,
							})
						}>
						<option value='0' disabled>
							-- Cantidad --
						</option>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
						<option value='6'>6</option>
						<option value='7'>7</option>
					</select>
				</div>
				<p className={styles.precio}>
					$<span>{producto.precio}</span>
				</p>
				<p className={styles.subtotal}>
					Subtotal: $<span>{producto.precio * producto.cantidad}</span>
				</p>
			</div>
		</div>
	));
};

export default CarritoProductos;
