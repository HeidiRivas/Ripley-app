import React from 'react'
import Header from '../../Componentes/Header/Header';
import styles from './newProduct.module.css'


const NewProduct = () => {
  const campos = ['categorias', 'SKU_seller', 'título', 'descripcion', 'imagen1', 'imagen-Miniatura', 'variant_id', 'marca', 'color', 'talla', 'tabla-de-tallas', 'género']
  return (
    <main>
      <Header />
      <div>
        <h1>NewProduct</h1>
        <section className={styles.container}>

          {campos.map((item) => (
            <div className={item}>
              <p>{item} </p>
              <input
                className={styles.inputcampos}
                name={item}
                type='text'
              ></input>
            </div>
          ))}


        </section>
        <button>Cargar</button>
      </div>
    </main>
  );
};

export default NewProduct;