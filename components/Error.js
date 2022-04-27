import React from 'react';
import styles from '../styles/Error.module.css';

const Error = ({ children }) => {
	return <div className={styles.alerta}>{children}</div>;
};

export default Error;
