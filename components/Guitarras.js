import React from 'react';
import Guitarra from './Guitarra';
import styles from '../styles/Guitarras.module.css';

const Guitarras = ({ guitarras }) => {
	return (
		<div className={styles.listado}>
			{guitarras.map((guitarra) => (
				<Guitarra key={guitarra._id} guitarra={guitarra} />
			))}
		</div>
	);
};

export default Guitarras;
