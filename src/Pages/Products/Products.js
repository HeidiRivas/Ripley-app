import React from 'react'
import Header from '../../Componentes/Header/Header'
import styles from './products.module.css'
import { Link } from 'react-router-dom'

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
        <h1>Product</h1>
    </main>
  );
};

export default Products