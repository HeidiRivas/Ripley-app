import React from 'react'
import Header from '../../Componentes/Header/Header';
import styles from './newProduct.module.css'


const NewProduct = () => {
  const campos = [{"nombre": "Categoria","descripcion": "A que tipo de objeto pertence el artículo"},
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
      <div>
        <section className={styles.containerTitlePage}>
        <h1 className={styles.TilteStylePage}>¡Añade tu nuevo producto!</h1>
        <p className={styles.descriptionStyle}>Rellena el siguiente formulario con los datos del producto para obtener un excel con el registro de lo que hayas rellenado.</p>
        </section>
        <section className={styles.container}>
          {campos.map((item) => (
            <div className={styles.containerAllItems}>
              <div className={item.nombre}>
                <section className={styles.containerTitleAndInput}>
                  <h2 className={styles.TitleStyle}>{item.nombre}</h2>
                  <p className={styles.descriptionStyle}>{item.descripcion}</p>
                  <input
                  className={styles.inputcampos}
                  name={item}
                  type='text'
                  ></input>
                </section>
              </div>
            </div>
          ))}
        </section>
        <button className={styles.btnAddProduct}>Siguiente</button>
      </div>
    </main>
  );
};

export default NewProduct;