import React, { useState } from "react";
import Header from "../../Componentes/Header/Header";
import styles from "./bulkPoduct.module.css";
import * as XLSX from "xlsx";
import { ItemBulkProduct } from "Componentes/itemBulkProduct/itemBulkProduct";
import { Button, Modal } from 'rsuite';



export function BulkPoducts() {
  const [dataExcel, setDataExcel] = useState([]);
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const readUploadFile = (e) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      if (e.target.files.length === 0) {
        return;
      }
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);
        setDataExcel(json);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };

  return (
    <main>
      <Header />

      <a className={styles.btnAddProduct} href="/Ripley_Seller.xlsx"> {" "} Descargar Excel</a>

      <form>
        <label htmlFor="upload"> </label>
        <input
          type="file"
          name="upload"
          id="upload"
          onChange={readUploadFile}
          accept=".xlsx"
        />
      </form>

      {dataExcel.map((x, index) => {
        return (
          <div
            key={index}
            style={{
              padding: "100px",
            }}
          >
          <ItemBulkProduct
            data={x}
          />
          </div>
        );
      })}

<Modal open={open} onClose={handleClose}>
    <Modal.Header>
      <Modal.Title>¡Bienvenidos a la sección de carga masiva!</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div>Para poder subir tus productos de manera masiva descarga nuestro Excel</div>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={handleClose} appearance="primary">
        Ok
      </Button>
    </Modal.Footer>
  </Modal>
    </main>
  );
}
