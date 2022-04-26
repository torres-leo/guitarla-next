import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/NoEncontrado.module.css';

const NoEncontrado = () => {
	return (
		// <Layout>

		<div className={styles.noEncontrado}>
			<h1 className='heading'>Pagina No encontrada</h1>

			<section className={styles.errorContainer}>
				<span className={styles.four}>
					<span className={styles.screenReaderText}>4</span>
				</span>
				<span className={styles.zero}>
					<span className={styles.screenReaderText}>0</span>
				</span>
				<span className={styles.four}>
					<span className={styles.screenReaderText}>4</span>
				</span>
			</section>

			<p>Da &quot;click&quot; en uno de los siguientes enlaces para regresar a la página web: </p>

			<Link href='/'>Inicio</Link>
			<Link href='/nosotros'>Nosotros</Link>
			<Link href='/blog'>Blog</Link>
			<Link href='/tienda'>Tienda</Link>
		</div>

		// </Layout>
	);
};

export default NoEncontrado;
