import React, { useState } from "react";
import Header from "../../Componentes/Header/Header";
import styles from "./newProduct.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Stars } from "Componentes/Stars/Stars";

const NewProduct = () => {
  const [stars, setStars] = useState(0);
  const CalcularCamposCorrectos = (newData) => {
    let contador = 0;
    Object.keys(newData).map((x) => {
      if (newData[x]) {
        contador++;
      }
    });
    console.log(contador);
    return contador;
  };

  const campos = [
    {
      nombre: "categoria",
      descripcion: "A que tipo de objeto pertence el artículo",
      obligatorio: true,
    },
    {
      nombre: "SKU_seller",
      descripcion: "Número único que identifica su producto",
      obligatorio: true,
    },
    { nombre: "título", descripcion: "Nombre del producto", obligatorio: true },
    {
      nombre: "descripcion",
      descripcion: "Explique detalladamente las características del producto",
      obligatorio: true,
    },
    {
      nombre: "imagen1",
      descripcion: "Agregue imagen de buena calidad",
      obligatorio: true,
    },
    {
      nombre: "imagen_Miniatura",
      descripcion: "Agregue imagen de buena calidad",
      obligatorio: true,
    },
    {
      nombre: "variant_id",
      descripcion:
        "Número que identifica la variable de su producto, de existir",
      obligatorio: true,
    },
    {
      nombre: "marca",
      descripcion: "Nombre de la marca de su producto",
      obligatorio: true,
    },
    { nombre: "color", descripcion: "Indique el color", obligatorio: true },
    {
      nombre: "talla",
      descripcion: "Agregue talla disponible",
      obligatorio: true,
    },
    {
      nombre: "tabla_de_tallas",
      descripcion: "Ingrese tabla de tallas",
      obligatorio: true,
    },
    {
      nombre: "genero",
      descripcion: "Agregue imagen de buena calidad",
      obligatorio: true,
    },
  ];
  const [datos, setDatos] = useState({
    categoria: "",
    SKU_seller: "",
    título: "",
    descripcion: "",
    imagen1: "",
    imagen_Miniatura: "",
    variant_id: "",
    marca: "",
    color: "",
    talla: "",
    tabla_de_tallas: "",
    genero: "",
  });

  const handleInputChange = (event) => {
    let newData = {
      ...datos,
      [event.target.name]: event.target.value,
    };
    setDatos(newData);
    let estrellas = (
      (5 / campos.length) *
      CalcularCamposCorrectos(newData)
    ).toFixed(2);
    setStars(Number(estrellas));
  };
  return (
    <main>
      <Header />
      <section className={styles.containerTitlePage}>
        <Link to="/products">
          <FontAwesomeIcon icon={faArrowLeftLong} className={styles.btnBack} />
          {/* <button className={styles.btnBack}>patras</button> */}
        </Link>
        <h1 className={styles.TilteStylePage}>¡Añade tu nuevo producto!</h1>
        <p className={styles.descriptionStylePage}>Completa todos los campos</p>
      </section>

      <div>
        <h1>NewProduct</h1>
        <form>
          <section className={styles.container}>
            {campos.map((item, index) => (
              <div className={styles.containerAllItems} key={index}>
                <div className={item.nombre}>
                  <h2 className={styles.TitleStyle}>{item.nombre}</h2>
                  <p className={styles.descriptionStyle}>{item.descripcion}</p>
                  <input
                    className={styles.inputcampos}
                    name={item.nombre}
                    type="text"
                    onChange={handleInputChange}
                  ></input>
                </div>
              </div>
            ))}
          </section>
        </form>
        <Stars stars={stars} style={{ left: "80%" }} />

        <button type="submit" className={styles.btnAddProduct}>
          Cargar
        </button>
      </div>
    </main>
  );
};

export default NewProduct;
