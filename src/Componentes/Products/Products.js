import React from 'react'
import styles from './products.module.css'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <main>
    <div><h1>Product</h1>
    <Link to="/newproduct">
    <button>Agregar Producto</button>
    </Link>
    </div>
    </main>
  );
};

export default Products;