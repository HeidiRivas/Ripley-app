import styles from './login.module.css'
import ripleytech from '../../Componentes/imagenes/ripleytech.png'
import { Link } from 'react-router-dom'
import Bienvenido from '../../Componentes/imagenes/Bienvenido.png'
import React from 'react'

const Login = () => {
	  
	return (
		
		<main>
			<div className={styles.containerImageandForm}>
			<div className={styles.containerimg}>
                <img src={Bienvenido} alt='logoripley' className={styles.Bienvenido} />
            </div>
			<div className={styles.container}>
				<section className={styles.containerFormLogin}>
					<img src={ripleytech} alt='logoripley' className={styles.logoripleytech} />
            		<h1 className={styles.textStyle}>RipleyTECH_</h1>
					<input className={styles.TextBox} name='email' type="email" placeholder="Ingresa tu correo"></input>
					<input className={styles.TextBox} name='password' type="password" placeholder="Ingresa tu contraseña"></input>
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