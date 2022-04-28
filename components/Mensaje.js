import React from 'react';

const Error = ({ children, tipo }) => {
	return <div className={`alerta ${tipo}`}>{children}</div>;
};

export default Error;
