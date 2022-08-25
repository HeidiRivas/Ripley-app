import React from 'react'
import Header from '../../Componentes/Header/Header'
import styles from './products.module.css'
import { Link } from 'react-router-dom'
import { Button, Modal } from 'rsuite';


export const Products = () => {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <main>
      <Header />
      <div className={styles.containerbtn}>
        <Link to="/bulkProducts">
          <button className={styles.btnAddProduct}>Carga Masiva de Productos</button>
        </Link> 
        <Link to="/newproduct">
          <button className={styles.btnAddProduct}>Agregar Producto</button>
        </Link>  
      </div>        
        <h1>Product</h1>
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