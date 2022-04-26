import React from 'react';
import Link from 'next/link';
import style from '../styles/Footer.module.css';

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<footer className={style.footer}>
			<div className={`contenedor ${style.contenido}`}>
				<nav className={style.navegacion}>
					<Link href='/'>Inicio</Link>
					<Link href='/nosotros'>Nosotros</Link>
					<Link href='/blog'>Blog</Link>
					<Link href='/tienda'>Tienda</Link>
				</nav>
				<div className={style.copyright}>
					<p>Todos los derechos Reservados &copy;</p>
					<small className={style.autor}>
						Leo Torres - <span className='year'>{year}</span>
					</small>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
