import React, { useContext } from 'react'
import Header from '../../Componentes/Header/Header'
import styles from './products.module.css'
import { Link } from 'react-router-dom'
import { Button, Modal } from 'rsuite';
import boximg from '../../Componentes/imagenes/boximg.png'
import { TableProduct } from 'Componentes/TableProduct/TableProduct';
import { DatosContext } from 'Componentes/Context/Context';

export const Products = () => {
  const Context = useContext(DatosContext)
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const products = []

  console.log(Context.grupo)

  return (

    <main>
      <Header />
      <div className={styles.containerbtn}>
        <Link to="/bulkProducts">
          <button className={styles.btnAddProduct}>Carga Masiva de Productos</button>
        </Link> 
        <Link to="/newproduct">
          <button className={styles.btnAddProductAddProduct}>Agregar Producto</button>
        </Link>  
      </div>     
      {Context.grupo.length==0 &&
      <div>
      <div className={styles.textnoProducts}>    
        <p className={styles.titleNoProducts}>No hay productos registrados</p>
        {/* <FontAwesomeIcon icon={faDropbox}/> */}
      </div>
      <div className={styles.boximgcontainer}>
        <img src={boximg} alt='boximg' className={styles.boximg} />
      </div>
      </div> 
      }
      {Context.grupo.length!=0 &&
      <div className={styles.tablefixed}>
        <TableProduct data={Context.grupo}/>
      </div>
      }
        <Modal open={open} onClose={handleClose}>
    <Modal.Header>
      <Modal.Title>¡Bienvenidos a Marketplace de Ripley!</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div>Acá podrás agregar nuevos poductos de manera individual y masiva</div>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={handleClose} appearance="primary">
        Ok
      </Button>
    </Modal.Footer>
  </Modal>
    </main>

  );
};

export default Products