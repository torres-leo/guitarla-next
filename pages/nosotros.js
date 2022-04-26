import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import styles from '../styles/Nosotros.module.css';

const Nosotros = () => {
	return (
		<div>
			<Layout pagina='Nosotros'>
				<main className='contenedor'>
					<h2 className='heading'>Nosotros</h2>
					<div className={styles.contenido}>
						<div className={styles.divImagen}>
							<Image
								layout='responsive'
								width={600}
								height={450}
								src='/img/nosotros.jpg'
								alt='Imagen nosotros'
								priority={true}
							/>
						</div>
						<div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ut fugit voluptatibus sed
								dolorum impedit temporibus excepturi minima numquam rerum ad cumque illum, veniam modi
								ratione perferendis quae maiores libero? Eum facilis neque deserunt doloribus
								praesentium. Similique adipisci, enim quae labore assumenda omnis atque facere
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quisquam, id officiis,
								quas dignissimos eius quam facilis vero molestiae assumenda totam ipsa architecto,
								corporis placeat odit expedita! Eaque, sint illum. Ipsam cum explicabo beatae inventore
								eligendi tempore eaque repudiandae amet excepturi enim ipsa minus voluptatibus unde
							</p>
						</div>
					</div>
				</main>
			</Layout>
		</div>
	);
};

export default Nosotros;
