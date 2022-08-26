import React,{ useState } from "react"; 

const DatosContext = React.createContext({});
const ContextProvider = ({ children }) => {

    const [grupoProductos, setGrupoProductos] = useState([]);

    const agregarProducto = (productoCapturado)=> {
        setGrupoProductos([...grupoProductos, productoCapturado])
    }
const data = {
    agregar: agregarProducto, 
    grupo: grupoProductos
}

    return <DatosContext.Provider value={data}>{children}</DatosContext.Provider>;

}

export {DatosContext, ContextProvider}


/*const enviarDatos = (event) =>{
    event.preventDefault();
    const inpVal= {
       categoria:datos.categoria,
       SKU_seller:datos.SKU_seller,
       título:datos.título,
       descripcion:datos.descripcion,
       imagen1:datos.imagen1,
       imagen_Miniatura:datos.imagen_Miniatura,
       variant_id: datos.variant_id,
       marca:datos.marca,
       color:datos.color,
       talla:datos.talla,
       tabla_de_tallas: datos.tabla_de_talla,
       genero:datos.genero}
       }

       crear un estado 

       crear un array vacio en un estado data SsetData([])

       lo llamo dentro una funcion esta funcion tiene dentro de si al setdata y ese setdata guarda lo q recoge enviar datos la funcion tiene como parametro un objeto , del lado de newproduct enviardatos llama a la funcion del context y te entrego la variable q cree con el objeto. */