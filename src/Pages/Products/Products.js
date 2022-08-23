import React from 'react'
import Header from '../../Componentes/Header/Header'
import styles from './products.module.css'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <main>
      <Header />
      <div>
        <Link to="/newproduct">
          <button className={styles.btnAddProduct}>Agregar Producto</button>
        </Link>
        <h1>Product</h1>
      </div>
    </main>
  );
};

export default Products