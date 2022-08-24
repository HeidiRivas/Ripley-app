import styles from './login.module.css'
import Logo from '../../Componentes/imagenes/logo-Ripley.png'
import { Link } from 'react-router-dom'
import Bienvenido from '../../Componentes/imagenes/Bienvenido.png'

const Login = () => {
	  
	return (
		<main>
			<section  className={styles.login_view}>
				<section className={styles.sct}>
				<form className={styles.login_form}>
				<img src={Logo} alt='logomain' className={styles.logo} />
				<img src={Bienvenido} alt='bienvenido' className={styles.Bienvenido}/>
					<div className={styles.login_input}>
						<input className={styles.email2} name='email' type="email" placeholder="Ingresa tu correo"></input>
					</div>
					<div className={styles.login__input}>
						<input className={styles.email2} name='password' type='password' placeholder="Ingresa tu contraseña"></input>
					</div>
					<div className={styles.login_input}>
					<Link to="/products">
                       <button className={styles.btn_login_btn} type="submit" id="login"  >Ingresar</button>
					</Link>
					</div>
					<small></small>
				</form>
			</section>
			</section>
		</main>
	);
};

export default Login;