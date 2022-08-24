import React, { useState } from "react";
import Header from "../../Componentes/Header/Header";
import styles from "./bulkPoduct.module.css";
import * as XLSX from "xlsx";
import { ItemBulkProduct } from "Componentes/itemBulkProduct/itemBulkProduct";
export function BulkPoducts() {
  const [dataExcel, setDataExcel] = useState([]);
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
      <h1>Como llenar el excel</h1>

      <a className={styles.btnAddProduct} href="/Ripley_Seller.xlsx">
        {" "}
        Descargar Excel
      </a>

      <form>
        <label htmlFor="upload">Upload File</label>
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
    </main>
  );
}
