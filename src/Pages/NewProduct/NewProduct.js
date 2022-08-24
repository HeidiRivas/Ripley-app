import React,{useState} from 'react'
import Header from '../../Componentes/Header/Header';
import styles from './newProduct.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'



const NewProduct = () => {

  const campos = [{ "nombre": "categoria", "descripcion": "A que tipo de objeto pertence el artículo" },
  { "nombre": 'SKU_seller', "descripcion": "Número único que identifica su producto" },
  { "nombre": 'título', "descripcion": "Nombre del producto" },
  { "nombre": 'descripcion', "descripcion": "Explique detalladamente las características del producto" },
  { "nombre": 'imagen1', "descripcion": "Agregue imagen de buena calidad" },
  { "nombre": 'imagen_Miniatura', "descripcion": "Agregue imagen de buena calidad" },
  { "nombre": 'variant_id', "descripcion": "Número que identifica la variable de su producto, de existir" },
  { "nombre": 'marca', "descripcion": "Nombre de la marca de su producto" },
  { "nombre": 'color', "descripcion": "Indique el color" },
  { "nombre": 'talla', "descripcion": "Agregue talla disponible" },
  { "nombre": 'tabla_de_tallas', "descripcion": "Ingrese tabla de tallas" },
  { "nombre": 'genero', "descripcion": "Agregue imagen de buena calidad" },
  ]
  const [datos, setDatos] = useState({
    categoria:'',
    SKU_seller:'',
    título:'',
    descripcion:'',
    imagen1:'',
    imagen_Miniatura:'',
    variant_id:'',
    marca:'',
    color:'',
    talla:'',
    tabla_de_tallas:'',
    genero:''
  })

  const handleInputChange = (event) =>{
      setDatos({
        ...datos,
        [event.target.name] : event.target.value

      })
}
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
      <div>
        <h1>NewProduct</h1>
        <form >
          <section className={styles.container}>

            {campos.map((item) => (
              <div className={item.nombre}>
                <p>{item.nombre} </p>
                <p>{item.descripcion}</p>
                <input
                  className={styles.inputcampos}
                  name={item.nombre}
                  type='text'
                  onChange={handleInputChange}
                ></input>
              </div>
            ))}

            <button type="submit" className={styles.btnAddProduct}>Cargar</button>
          </section>
        </form>

      </div>


    </main>

  );
};

export default NewProduct;



