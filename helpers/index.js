export const formatearFecha = (fecha) => {
	const fechaNueva = new Date(fecha);

	const opciones = {
		year: 'numeric',
		month: 'long',
		day: '2-digit',
	};

	return fechaNueva.toLocaleDateString('es-ES', opciones);
};

export const getRandomInt = (min, max) => {
	return Math.floor(Math.random() * (max - min)) + min;
};
