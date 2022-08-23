import React from 'react'
import Header from '../../Componentes/Header/Header';
import styles from './newProduct.module.css'


const NewProduct = () => {
  const campos = [{"nombre": "categoria","descripcion": "A que tipo de objeto pertence el artículo"},
                  {"nombre": 'SKU_seller',"descripcion": "Número único que identifica su producto"} , 
                  {"nombre":  'título',"descripcion": "Nombre del producto"} ,
                  {"nombre":  'descripcion',"descripcion": "Explique detalladamente las características del producto"}, 
                  {"nombre":   'imagen1',"descripcion": "Agregue imagen de buena calidad"},
                  {"nombre":   'imagen-Miniatura',"descripcion": "Agregue imagen de buena calidad"},
                  {"nombre":   'variant_id',"descripcion": "Número que identifica la variable de su producto, de existir"},
                  {"nombre":   'marca',"descripcion": "Nombre de la marca de su producto"},
                  {"nombre":   'color',"descripcion": "Indique el color"},
                  {"nombre":   'talla',"descripcion": "Agregue talla disponible"},
                  {"nombre":   'tabla-de-tallas',"descripcion": "Ingrese tabla de tallas"},
                  {"nombre":   'genero',"descripcion": "Agregue imagen de buena calidad"},
                 ]
  return (
    <main>
      <Header />
      <div>
        <h1>NewProduct</h1>
        <section className={styles.container}>

          {campos.map((item) => (
            <div className={item.nombre}>
              <p>{item.nombre} </p>
              <p>{item.descripcion}</p>
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