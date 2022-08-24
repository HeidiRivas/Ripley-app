import styles from './login.module.css'
import Logo from '../../Componentes/imagenes/logoRipley.png'
import { Link } from 'react-router-dom'
import Bienvenido from '../../Componentes/imagenes/Bienvenido.png'
import React from 'react'
import Header from 'Componentes/Header/Header'

const Login = () => {
	  
	return (
		
		<main>
			<Header/>
			<div className={styles.containerImageandForm}>
			<img src={Bienvenido} alt='bienvenido' className={styles.Bienvenido}/>
			<div className={styles.container}>
				<section className={styles.containerFormLogin}>
					<img src={Logo} alt='logomain' className={styles.logo} />
					<input className={styles.TextBox} name='email' type="email" placeholder="Ingresa tu correo"></input>
					<input className={styles.TextBox} name='password' type="email" placeholder="Ingresa tu contraseña"></input>
					<Link to="/products">
                       <button className={styles.btnAddProduct} type="submit" id="login">Ingresar</button>
					</Link>
				</section>
			</div>
			</div>
		</main>
	);
};

export default Login;