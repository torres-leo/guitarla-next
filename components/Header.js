import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';

const Header = ({ guitarra }) => {
	const router = useRouter();
	// console.log(router);
	return (
		<header className={styles.header}>
			<div className='contenedor'>
				<div className={styles.barra}>
					<div>
						<Link href='/'>
							<a>
								<Image src='/img/logo.svg' alt='Logo' width={400} height={100} />
							</a>
						</Link>
					</div>
					<nav className={styles.navegacion}>
						<Link href='/'>Inicio</Link>
						<Link href='/nosotros'>Nosotros</Link>
						<Link href='/blog'>Blog</Link>
						<Link href='/tienda'>Tienda</Link>
						<Link href='/carrito'>
							<a href=''>
								<Image
									layout='fixed'
									width={30}
									height={25}
									src='/img/carrito.png'
									alt='imagen carrito'
								/>
							</a>
						</Link>
					</nav>
				</div>

				{guitarra && (
					<div className={styles.modelo}>
						<h2>Modelo: {guitarra.nombre}</h2>
						<p className={styles.descripcion}>{guitarra.descripcion}</p>
						<p className={styles.precio}>${guitarra.precio}</p>
						<Link href={`/guitarras/${guitarra.url}`}>
							<a href='' className={styles.enlace}>
								Ver Producto
							</a>
						</Link>
					</div>
				)}
			</div>

			{router.pathname === '/' && (
				<div className={styles.guitarra}>
					<Image
						layout='fixed'
						width={300}
						height={550}
						src='/img/header_guitarra.png'
						alt='header guitarra'
					/>
				</div>
			)}
		</header>
	);
};

export default Header;
