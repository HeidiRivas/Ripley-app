import React from 'react'
import Header from '../../Componentes/Header/Header'
import styles from './products.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faDropBox } from '@fortawesome/free-solid-svg-icons'


const Products = () => {
  return (
    <main>
      <Header />
      <div className={styles.containerbtn}>
        <Link to="/bulkProducts">
          <button className={styles.btnAddProduct}>Carga Masiva de Productos</button>
        </Link> 
        <Link to="/newproduct">
          <button className={styles.btnAddProduct}>Agregar Producto</button>
        </Link>  
      </div>  
      <section className={styles.noProducts}>
      <h1 className={styles.textnoProducts}>No hay productos registrados</h1>
      {/* <FontAwesomeIcon icon={faDropBox} /> */}
      </section>      
        
    </main>
  );
};

export default Products