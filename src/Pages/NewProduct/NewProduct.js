import React from 'react'
import Header from '../../Componentes/Header/Header';
import styles from './newProduct.module.css'


const NewProduct = () => {
  return (
    <main>
      <Header />
      <div>
        <h1>NewProduct</h1>
        <button>Cargar</button>
      </div>
    </main>
  );
};

export default NewProduct;