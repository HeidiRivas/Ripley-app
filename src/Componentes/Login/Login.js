import styles from './login.module.css'
import Logo from '../imagenes/logo-Ripley.png'





const Login = () => {
	  
	return (
		<main className={styles.login_view}>
			<section >
				<section className={styles.sct}>
				<form className={styles.login_form}>
				<img src={Logo} alt='logomain' className={styles.logo} />
					<div className={styles.login_input}>
						<input className={styles.email2} name='email' type="email" placeholder="Ingresa tu correo"></input>
					</div>
					<div className={styles.login__input}>
						<input className={styles.email2} name='password' type='password' placeholder="Ingresa tu contraseña"></input>
					</div>
					<div className={styles.login_input }>
					
                       <button className={styles.btn_login_btn} type="submit" id="login"  >Ingresar</button>
				 	
					</div>
					<small></small>
				</form>
			</section>
			</section>
		</main>
	);
};

export default Login;