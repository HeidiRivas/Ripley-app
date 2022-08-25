import React, { useState } from "react";
import Header from "../../Componentes/Header/Header";
import styles from "./newProduct.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Stars } from "Componentes/Stars/Stars";
import { TableProduct } from "Componentes/TableProduct/TableProduct";

const NewProduct = () => {
  const valorInicial = {
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
  };
  const [stars, setStars] = useState(0);
  const [datos, setDatos] = useState(valorInicial);
  const [grupoProductos, setGrupoProductos] = useState([]);
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
      mostrar: "Categoría",
      descripcion: "A que tipo de objeto pertence el artículo.",
      obligatorio: true,
      tipo: "input",
    },
    {
      nombre: "SKU_seller",
      mostrar: "SKU Producto",
      descripcion: "Número único que identifica su producto.",
      obligatorio: true,
      tipo: "input",
    },
    {
      nombre: "título",
      mostrar: "Nombre Producto",
      descripcion: "Nombre del producto.",
      obligatorio: true,
      tipo: "input",
    },
    {
      nombre: "descripcion",
      mostrar: "Descripción",
      descripcion: "Explique detalladamente las características del producto.",
      obligatorio: true,
      tipo: "area",
    },
    {
      nombre: "imagen1",
      mostrar: "Imagen Principal",
      descripcion: "Agregue imagen de buena calidad.",
      obligatorio: true,
      tipo: "file",
    },
    {
      nombre: "imagen_Miniatura",
      mostrar: "Imagen Detalle",
      descripcion: "Agregue imagen de buena calidad.",
      obligatorio: true,
      tipo: "file",
    },
    {
      nombre: "variant_id",
      mostrar: "ID",
      descripcion:"Número que identifica la variable de su producto, de existir.",
      obligatorio: true,
      tipo: "input",
    },
    {
      nombre: "marca",
      mostrar: "Marca Producto",
      descripcion: "Nombre de la marca de su producto.",
      obligatorio: true,
      tipo: "input",
    },
    {
      nombre: "color",
      mostrar: "Color Producto",
      descripcion: "Indique el color.",
      obligatorio: true,
      tipo: "input",
    },
    {
      nombre: "talla",
      mostrar: "Talla Producto",
      descripcion: "Agregue talla disponible.",
      obligatorio: true,
      tipo: "input",
    },
    {
      nombre: "tabla_de_tallas",
      mostrar: "Guía de Talla",
      descripcion: "Ingrese tabla de tallas.",
      obligatorio: true,
      tipo: "file",
    },
    {
      nombre: "genero",
      mostrar: "Género",
      descripcion: "Agregue imagen de buena calidad.",
      obligatorio: true,
      tipo: "input",
    },    
    {
      nombre: "Imagen-2",
      mostrar: "Imagen 2",
      descripcion: "Agregue otra imagen.",
      obligatorio: false,
      tipo: "file",
    },
    {
      nombre: "Imagen-3",
      mostrar: "Imagen 3",
      descripcion: "Agregue otra imagen.",
      obligatorio: false,
      tipo: "file",
    },
    {
      nombre: "medida-alto",
      mostrar: "Medidas: Alto (cm)",
      descripcion: "Agregue las medidas del producto.",
      obligatorio: false,
      tipo: "input",
    },
    {
      nombre: "medida-Ancho",
      mostrar: "Medidas: Ancho (cm)",
      descripcion: "Agregue las medidas del producto.",
      obligatorio: false,
      tipo: "input",
    },
    {
      nombre: "medida-Largo",
      mostrar: "Medidas: Largo (cm)",
      descripcion: "Agregue las medidas del producto.",
      obligatorio: false,
      tipo: "input",
    },
    {
      nombre: "Peso-producto",
      mostrar: "Peso del Producto (kg)",
      descripcion: "Ingrese el peso del producto.",
      obligatorio: false,
      tipo: "input",
    },
  ];

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
        <h1 className={styles.TilteStylePage}>¡Añade tu nuevo producto!</h1><br></br>
        <p className={styles.descriptionStylePage}>Completa todos los campos</p>
      </section>

      <div>
<br></br>
        <form>
          <section className={styles.container}>
            {campos.map((item, index) => (
              <div className={styles.containerAllItems} key={index}>
                <div className={item.nombre}>
                  <h2 className={styles.TitleStyle}>{item.mostrar}</h2>

                  {item.tipo === "input" ? (
                    <input
                      className={"rs-input"}
                      name={item.nombre}
                      type="text"
                      placeholder={item.descripcion}
                      onChange={handleInputChange}
                      value={datos[item.nombre]}
                    ></input>
                  ) : item.tipo === "area" ? (
                    <textarea
                      className={"rs-input"}
                      name={item.nombre}
                      rows={2}
                      placeholder={item.descripcion}
                      onChange={handleInputChange}
                      value={datos[item.nombre]}
                    ></textarea>
                  ) : item.tipo === "file" ? (
                    <input
                      className={"rs-input"}
                      name={item.nombre}
                      type="file"
                      placeholder={item.descripcion}
                      onChange={handleInputChange}
                      value={datos[item.nombre]}
                    ></input>
                  ) : (
                    <></>
                  )}
                 {
                  item.obligatorio ? 
                  datos[item.nombre] ? <></> : 
                  <label style={{color: "red"}}>Debe llenar este campo </label> : 
                  <></>
                 }
                </div>
              </div>
            ))}
          </section>
        </form>
        <Stars stars={stars} style={{ left: "80%" }} />

        <button
          type="button"
          onClick={() => {
            let isValid = true;
            let error = "";
            for (let i = 0; i < Object.keys(datos).length; i++) {
              let element = Object.keys(datos)[i];
              let isRequired = campos.find((x) => x.nombre === element);
              if (isRequired.obligatorio) {
                if (!datos[element]) {
                  isValid = false;
                  error = element;
                  break;
                }
              }
            }

            if (isValid) {
              setGrupoProductos([
                ...grupoProductos,
                {
                  ...datos,
                  id: grupoProductos.length + 1,
                  stars: stars,
                },
              ]);
              setDatos(valorInicial);
              setStars(0);
            }else{
              alert('El campo ' + error + " es obligatorio");
            }
          }}
          className={styles.btnAddProduct}
        >
          Cargar
        </button>
      </div>

      <TableProduct data={grupoProductos} />
    </main>
  );
};

export default NewProduct;
