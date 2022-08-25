import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stars } from "Componentes/Stars/Stars";
import React from "react";
import { Table } from "rsuite";
import * as XLSX from "xlsx";
import  "./TableProduct.css";

export function TableProduct({ data }) {
  const { Column, HeaderCell, Cell } = Table;
  const downloadExcel = (data) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Productos");
    XLSX.writeFile(workbook, "Listado de Productos.xlsx");
  };

  return (
    <>
      <Table
        height={400}
        data={data}
        onRowClick={(rowData) => {
          console.log(rowData);
        }}
      >
        <Column width={60} align="center" fixed>
          <HeaderCell>SKU</HeaderCell>
          <Cell dataKey="SKU_seller" />
        </Column>

        <Column  resizable width={100}>
          <HeaderCell>Categoría</HeaderCell>
          <Cell dataKey="categoria" />
        </Column>

        <Column width={100}>
          <HeaderCell>Marca Producto</HeaderCell>
          <Cell dataKey="marca" />
        </Column>

        <Column width={100}>
          <HeaderCell>Imagen Principal</HeaderCell>
          <Cell dataKey="imagen1" />
        </Column>

        <Column width={100}>
          <HeaderCell>Descripción</HeaderCell>
          <Cell dataKey="descripcion" />
        </Column>

        <Column width={100}>
          <HeaderCell>Nombre Producto</HeaderCell>
          <Cell dataKey="título" />
        </Column>

        <Column width={100}>
          <HeaderCell>Imagen Detalle</HeaderCell>
          <Cell dataKey="imagen_Miniatura" />
        </Column>

        <Column width={60}>
          <HeaderCell>ID</HeaderCell>
          <Cell dataKey="variant_id" />
        </Column>

        <Column width={100}>
          <HeaderCell>Marca Producto</HeaderCell>
          <Cell dataKey="marca" />
        </Column>

        <Column width={100}>
          <HeaderCell>Color Producto</HeaderCell>
          <Cell dataKey="color" />
        </Column>

        <Column width={100}>
          <HeaderCell>Talla Producto</HeaderCell>
          <Cell dataKey="talla" />
        </Column>

        <Column width={100}>
          <HeaderCell>Guía de Talla</HeaderCell>
          <Cell dataKey="tabla_de_tallas" />
        </Column>

        <Column width={100}>
          <HeaderCell>Género</HeaderCell>
          <Cell dataKey="genero" />
        </Column>

        <Column width={100}>
          <HeaderCell>Imagen 2</HeaderCell>
          <Cell dataKey="Imagen-2" />
        </Column>

        <Column width={100}>
          <HeaderCell>Imagen 3</HeaderCell>
          <Cell dataKey="Imagen-3" />
        </Column>

        <Column width={50}>
          <HeaderCell>Alto cm</HeaderCell>
          <Cell dataKey="medida-alto" />
        </Column>

        <Column width={50}>
          <HeaderCell>Ancho cm</HeaderCell>
          <Cell dataKey="medida-Ancho" />
        </Column>

        <Column width={50}>
          <HeaderCell>Largo cm</HeaderCell>
          <Cell dataKey="medida-Largo" />
        </Column>

        <Column width={50}>
          <HeaderCell>Peso del Producto kg</HeaderCell>
          <Cell dataKey="Peso-producto" />
        </Column>

        <Column width={80} fixed="right">
          <HeaderCell>...</HeaderCell>
          <Cell>
            {(rowData) => (
              <span>
                <a onClick={() => alert(`id:${rowData.id}`)}> Edit </a>
              </span>
            )}
          </Cell>
        </Column>
        <Column width={100} fixed="right">
          <HeaderCell>Estrellas</HeaderCell>

          <Cell>
            {(rowData) => (
              <Stars stars={rowData.stars} />
            )}
          </Cell>
        </Column>
      </Table>

      <button
        onClick={() => {
          downloadExcel(data);
        }}
        className="btnAddProduct"
        
      > <FontAwesomeIcon icon={faFileExcel} style={{marginRight: "10px"}} />
        Descargar Excel
      </button>
    </>
  );
}
