import React from 'react'
import Header from '../../Componentes/Header/Header';
import styles from './newProduct.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'


const NewProduct = () => {
  const campos = [{"nombre": "Categoría","descripcion": "A que tipo de objeto pertence el artículo"},
                  {"nombre": 'SKU_seller',"descripcion": "Número único que identifica su producto"} , 
                  {"nombre":  'Título',"descripcion": "Nombre del producto"} ,
                  {"nombre":  'Descripción',"descripcion": "Explique detalladamente las características del producto"}, 
                  {"nombre":   'Imagen 1',"descripcion": "Agregue imagen de buena calidad"},
                  {"nombre":   'Imagen-Miniatura',"descripcion": "Agregue imagen de buena calidad"},
                  {"nombre":   'Variant_ID',"descripcion": "Número que identifica la variable de su producto, de existir"},
                  {"nombre":   'Marca',"descripcion": "Nombre de la marca de su producto"},
                  {"nombre":   'Color',"descripcion": "Indique el color"},
                  {"nombre":   'Talla',"descripcion": "Agregue talla disponible"},
                  {"nombre":   'Tabla-de-tallas',"descripcion": "Ingrese tabla de tallas"},
                  {"nombre":   'Género',"descripcion": "Agregue imagen de buena calidad"},
                 ]
  return (
    <main>
      <Header />
        <section className={styles.containerTitlePage}>
        <Link to="/products">
        <FontAwesomeIcon icon={faArrowLeftLong} className={styles.btnBack}/>
          {/* <button className={styles.btnBack}>patras</button> */}
        </Link>
          <h1 className={styles.TilteStylePage}>¡Añade tu nuevo producto!</h1>
          <p className={styles.descriptionStylePage}>Completa todos los campos</p>
        </section>
        <section className={styles.container}>
          {campos.map((item) => (
            <div className={styles.containerAllItems}>
              <div className={item.nombre}>
                  <h2 className={styles.TitleStyle}>{item.nombre}</h2>
                  <p className={styles.descriptionStyle}>{item.descripcion}</p>
                  <input
                  className={styles.inputcampos}
                  name={item}
                  type='text'
                  ></input>
              </div>
            </div>
          ))}
        </section>
        <button className={styles.btnAddProduct}>Siguiente</button>
    </main>
  );
};

export default NewProduct;